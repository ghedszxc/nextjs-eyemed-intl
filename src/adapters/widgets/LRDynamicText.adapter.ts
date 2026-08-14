import { ILRDynamicText } from "@/widgets/LRDynamicText/LRDynamicText.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterImage, getAdapterVideoUrl } from "@/logic/utilities";

export class LRDynamicTextAdapter extends Adapter<
  ILRDynamicText,
  Nullable<ILRDynamicText>
> {
  adapt: (source: any) => Nullable<ILRDynamicText> = (source) => {
    if (!source.length) return null;
    const data = source?.[0];
    const direction: "LRDynamicBannerRight" | "LRDynamicBannerLeft" | undefined = data?.viewtype;

    const getDirection = (): "left" | "right" => {
      if(direction === "LRDynamicBannerLeft") return "left";
      if(direction === "LRDynamicBannerRight") return "right";

      return "left";
    }

    return {
      header1: data?.teaserTitle == "-" ? "" : data?.teaserTitle,
      header2: data?.title,
      longText: data.detailText?.text,
      direction: getDirection(),
      picture: getAdapterImage(data?.pictures)?.[0],
      altText: data?.pictures?.[0]?.alt || "",
      video: getAdapterVideoUrl(data?.videos)?.[0],
      bg: data.settings?.bgcolor,
      padding: "both"
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
