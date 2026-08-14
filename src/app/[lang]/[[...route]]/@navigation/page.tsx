import { NavigationAdapter } from "@/adapters/widgets/Navigation.adapter";
import { cmsRepo } from "@/logic/graphql/CMSRepo";
import { Nullable } from "@/models/Nullable.interface";
import { INavigation } from "@/widgets/Navigation/Navigation.interface";
import { IUrl } from "@/models/IUrl.interface";
import AppConfig from "@/logic/configs/AppConfig";
import PLACEMENTS_TO_MERGE from "@/logic/configs/constants/PLACEMENTS_TO_MERGE";

// Components
import Navigation from "@/widgets/Navigation";
// export const revalidate = 60;

// Fetch
export const fetchNavigation = async (lang?: string): Promise<Nullable<INavigation>> => {
  if(!lang) return null;

  const cmsResp = await cmsRepo.getNavigation(lang);
  const adapter = new NavigationAdapter();

  const rows = cmsResp?.data?.content?.pageByPath?.grid?.rows;
  const navigationData = AppConfig.mergePlacement(
    rows,
    "Navigation",
    PLACEMENTS_TO_MERGE["Navigation"]
  )?.placements?.[0]?.items?.[0]?.placements?.[0]?.items;
  const adaptedNavigation = adapter.adapt(navigationData);

  return adaptedNavigation;
};

// Render
export default async function NavigationBar({
  params,
}: {
  params: Promise<{ lang?: string; route?: string[] }>;
}) {
  const urlParams = await params;
  const data = await fetchNavigation(urlParams?.lang === "404" ? "em-en" : urlParams?.lang);
  
  const url: IUrl = {
    locale: urlParams?.lang || "",
    route: urlParams?.route || [],
  };

  return (
    <header className="sticky top-0 z-[1000]">
      {data && <Navigation {...data} url={url} />}
    </header>
  );
}
