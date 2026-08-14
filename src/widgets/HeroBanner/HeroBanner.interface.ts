import { IPictureCrops } from "@/models/ICrops";

export interface IHeroBanner {
  picture?: IPictureCrops;
  fallbackImage?: string,
  title1?: string;
  variant: "large" | "medium" | "small";
  altText?: string;
}
