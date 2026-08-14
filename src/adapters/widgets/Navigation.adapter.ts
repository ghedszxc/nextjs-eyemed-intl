import { INavigation } from "@/widgets/Navigation/Navigation.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { ICta } from "@/models/components/ICta";
import { getAdapterCTA, IAdapterCTAObj } from "@/logic/utilities";
import { locales, localesLabels } from "@/middleware";

export class NavigationAdapter extends Adapter<
  INavigation,
  Nullable<INavigation>
> {
  adapt: (source: any) => Nullable<INavigation> = (source) => {
    if (!source?.length) return null;
    const data = source;

    const mainLinks: ICta[] = data.map((item: any): ICta => ({ ...getAdapterCTA(item?.teaserTargets || [{ target: item }])?.[0] }))
    .filter((item: ICta) => !!item.label);

    const homeLinkLabel = data?.find((link: { viewtype: string, name: string, type: string }) => link.type === "CMTeaser")?.teaserTitle || "No Label";
    const homeLink = { label: homeLinkLabel, url: "/" };
    
    const localeLinks = locales?.map((locale, key) => ({
      label: localesLabels?.[key].label,
      url: locale
    }))

    const findLegalLinks = data?.find((find: { type: string }) => find?.type === "CMCollection");
    const legalLinks = findLegalLinks?.items?.map((data: { teaserTargets: IAdapterCTAObj[] }) => {
      return getAdapterCTA(data?.teaserTargets || [{ target: data }])?.[0]
    });

    const findLogo = data.find((find: { type: string }) => find.type == 'CMPicture')
    const logoUrl = findLogo?.data?.uri || ""
    
    return {
      legalLinks: legalLinks,
      localeLinks: localeLinks,
      mainLinks: [homeLink, ...mainLinks],
      path: "",
      logo: logoUrl
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
