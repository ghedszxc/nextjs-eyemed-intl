// Modules
import { Nullable } from "../models/Nullable.interface";
import { Factory } from "./Factory";
import { IAdapter } from "../adapters/Adapter";
import { GenericWidgetNameModel } from "@/models/IGenericWidgetValue.interface";

// Adapters
import { NavigationAdapter } from "@/adapters/widgets/Navigation.adapter";
import { TextColumnAdapter } from "@/adapters/widgets/TextColumn.adapter";
import { HeroBannerAdapter } from "@/adapters/widgets/HeroBanner.adapter";
import { KeyFiguresAdapter } from "@/adapters/widgets/KeyFigures.adapter";
import { PhotoList1Adapter } from "@/adapters/widgets/PhotoList1.adapter";
import { PhotoList3Adapter } from "@/adapters/widgets/PhotoList3.adapter";
import { LRDynamicTextAdapter } from "@/adapters/widgets/LRDynamicText.adapter";
import { ArticleTextAdapter } from "@/adapters/widgets/ArticleText.adapter";
import { FooterAdapter } from "@/adapters/widgets/Footer.adapter";
import { PhotoList2Adapter } from "@/adapters/widgets/PhotoList2.adapter";
import { ContactUsFormAdapter } from "@/adapters/widgets/ContactUsForm.adapter";

export class WidgetParamAdapterFactory extends Factory<
  GenericWidgetNameModel,
  Nullable<IAdapter>
> {
  instance: (comparator: GenericWidgetNameModel) => Nullable<IAdapter> = (
    comparator
  ) => {
    switch (comparator) {
      // case "HeaderNavigation":
      //   return new NavigationAdapter();
      case "TextColumn":
        return new TextColumnAdapter();
      case "HeroBanner":
        return new HeroBannerAdapter();
      case "LRDynamicText":
        return new LRDynamicTextAdapter();
      case "ArticleText":
        return new ArticleTextAdapter();
      case "KeyFigures":
        return new KeyFiguresAdapter();
      case "PhotoList1":
        return new PhotoList1Adapter();
      case "PhotoList2":
        return new PhotoList2Adapter();
      case "PhotoList3":
        return new PhotoList3Adapter();
      // case "Footer":
        // return new FooterAdapter();
      case "contactUs":
        return new ContactUsFormAdapter();
      default:
        return null;
    }
  };
}
