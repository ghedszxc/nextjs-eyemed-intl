import { Nullable } from "@/models/Nullable.interface";
import { IFooter } from "@/widgets/Footer/Footer.interface";
import { FooterAdapter } from "@/adapters/widgets/Footer.adapter";
import { cmsRepo } from "@/logic/graphql/CMSRepo";
import AppConfig from "@/logic/configs/AppConfig";
import PLACEMENTS_TO_MERGE from "@/logic/configs/constants/PLACEMENTS_TO_MERGE";

// Components
import Footer from "@/widgets/Footer";
// export const revalidate = 60;

// Fetch
export const fetchFooter = async (lang?: string): Promise<Nullable<IFooter>> => {
  if(!lang) return null;
  const cmsResp = await cmsRepo.getFooter(lang);

  const rows = cmsResp?.data?.content?.pageByPath?.grid?.rows;
  const footerData = AppConfig.mergePlacement(rows, "Footer", PLACEMENTS_TO_MERGE["Footer"]);
  const adapter = new FooterAdapter();
  
  return adapter.adapt(footerData?.placements?.[0]?.items);
};

// Render
export default async function NavigationBar({params}: {params: Promise<{ lang?: string; route?: string[] }>}) {
  const { lang, route } = await params;
  const data = await fetchFooter(lang === "404" ? "em-ww" : lang);
  
  return (
    <footer>
      {data && <Footer {...data} url={{ locale: lang || "en", route: route || [] }} />}
    </footer>
  );
}
