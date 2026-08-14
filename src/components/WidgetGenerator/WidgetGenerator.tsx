import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { IWidgetModel } from "@/models/IWidget.interface";
import { WidgetParamAdapterFactory } from "@/factory/WidgetParamAdapterFactory";
import { IUrl } from "@/models/IUrl.interface";
import { TPadding } from "@/models/IPadding";

interface Widgets {
  [key: string]: ComponentType<any> | null;
}

/**
 * Add import here for new modules
 * set SSR true if needed.
 */
const Widgets: Widgets = {
  // "HeaderNavigation":  dynamic(() => import("@/widgets/Navigation")),
  "KeyFigures": dynamic(() => import("@/widgets/KeyFigures")),
  "TextColumn":  dynamic(() => import("@/widgets/TextColumn")),
  "contactUs":  dynamic(() => import("@/widgets/ContactUsForm")),
  "HeroBanner":  dynamic(() => import("@/widgets/HeroBanner")),
  "PhotoList1":  dynamic(() => import("@/widgets/PhotoList1")),
  "PhotoList2":  dynamic(() => import("@/widgets/PhotoList2")),
  "PhotoList3":  dynamic(() => import("@/widgets/PhotoList3")),
  "LRDynamicText":  dynamic(() => import("@/widgets/LRDynamicText")),
  "ArticleText":  dynamic(() => import("@/widgets/ArticleText")),
  // "Footer":  dynamic(() => import("@/widgets/Footer")),
};

interface IDynamicWidgetProps {
  url: IUrl;
  adaptedValues: unknown;
  padding: TPadding;
  pageType: string;
}

const WidgetGenerator = ({
  widgetName,
  widgetValue,
  widgetContainerId,
  url,
  settings,
  pageType,
}: IWidgetModel) => {
  const adapter = new WidgetParamAdapterFactory().instance(widgetName);
  let adaptedValues = adapter ? adapter.adapt(widgetValue) : widgetValue;

  const DynamicWidget: ComponentType<IDynamicWidgetProps> | null = Widgets[widgetName];

  /**
   * Widget settings configurations
   * 1. Padding
   */
  const padding: TPadding | undefined = widgetContainerId === undefined ? "both" : settings?.PlacementPadding?.[widgetContainerId];

  if (DynamicWidget) {
    DynamicWidget.displayName = widgetName;
    return (
      <DynamicWidget
        url={url}
        {...adaptedValues}
        padding={padding || "both"}
        pageType={pageType}
      />
    );
  } else {
    return null;
  }
};

export default WidgetGenerator;
