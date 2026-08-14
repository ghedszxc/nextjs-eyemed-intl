import { IHeroBanner } from "@/widgets/HeroBanner/HeroBanner.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { getAdapterCroppings, getAdapterImage } from "@/logic/utilities";

export class HeroBannerAdapter extends Adapter<
  IHeroBanner,
  Nullable<IHeroBanner>
> {
  adapt: (source: any) => Nullable<IHeroBanner> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const getVariant = (): "large" | "medium" | "small" => {
      if(data?.viewtype === "HeroLarge") return "large";
      if(data?.viewtype === "HeroSmall") return "small";
      if(data?.viewtype === "HeroMedium") return "medium";

      return "large";
    }

    return {
        variant: getVariant(),
        title1: data?.teaserTitle,
        fallbackImage: getAdapterImage(data?.pictures)?.[0],
        picture: getAdapterCroppings(data.pictures)?.[0],
        altText: data?.pictures?.[0]?.alt || '',
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
