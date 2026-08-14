import { IFooter } from "@/widgets/Footer/Footer.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCTA, getAdapterViewtype, getAkamayUrl, IAdapterCTAObj } from "@/logic/utilities";
import AppConfig from "@/logic/configs/AppConfig";

export class FooterAdapter extends Adapter<
  IFooter,
  Nullable<IFooter>
> {
  adapt: (source: any) => Nullable<IFooter> = (source) => {
    if (!source?.length) return null;
    const data = source?.map((placement: { placements: {}[] }) => placement.placements?.[0]);

    const rawMainLinks = getAdapterViewtype(data, "FooterNav").selected;
    const links = rawMainLinks?.items.map((data: { teaserTargets: IAdapterCTAObj[] }) => {
      return getAdapterCTA(data?.teaserTargets || [{ target: data }])?.[0]
    }).filter((find: { label: string }) => find?.label);
    
    const rawFooterSubNav = getAdapterViewtype(data, "FooterSubNav").selected;
    const subLinks = rawFooterSubNav?.items.map((data: { teaserTargets: IAdapterCTAObj[] }) => {
      return getAdapterCTA(data?.teaserTargets || [{ target: data }])?.[0]
    })
    
    const rawFooterSocialMedia = getAdapterViewtype(data, "FooterSocialMedia").selected;
    interface ICMPicture {
      data: {
        uri: string 
      }
    }
    interface ICMSocial {
      pictures: ICMPicture[],
      url: string;
      teaserTargets: IAdapterCTAObj[];
    }
    
    // TODO: to complete alt text in CM
    const tempSocialAlt = [
      'SGS system certification',
      'EyeMed on LinkedIn'
    ]
    const socials = rawFooterSocialMedia?.items?.map((social: ICMSocial, i: number) => {
      return {
        url: social?.url || getAdapterCTA(social.teaserTargets)[0].url,
        icon: social?.pictures?.[0]?.data?.uri || "",
        altText: tempSocialAlt?.[i] || ""
      }
    });

    const copyright = getAdapterViewtype(data, "FooterCopyright").selected?.items?.[0]?.teaserTitle;
    
    const homeLinkLabel = rawMainLinks?.items?.find((link: { viewtype: string, name: string, type: string }) => link.type === "CMTeaser")?.teaserTitle || "No Label";
    const homeLink = { label: homeLinkLabel, url: "/" };
    
    
    const findLogo = rawMainLinks?.items.find((find: any) => find.type == 'CMPicture') || {}
    const logoUrl = findLogo?.data?.uri || ""
    console.log(logoUrl)

    return {
      links: [homeLink, ...links],
      subLinks: subLinks,
      copyright: AppConfig.html(copyright),
      social: socials,
      logo: logoUrl
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
