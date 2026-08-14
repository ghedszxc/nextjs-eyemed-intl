// Models
import { IWidgetModel } from "../models/IWidget.interface";
import { ILayoutModel } from "../models/components/ILayout.interface";
import { IUrl } from "../models/IUrl.interface";
import {
  WIDGET_ARIA_LABELS,
  WIDGET_FALLBACK_ARIA_LABELS,
} from "@/logic/configs/constants/WIDGET_ARIA_LABELS";

// Components
import WidgetGenerator from "@/components/WidgetGenerator/WidgetGenerator";
import Analytics from "@/components/Analytics/Analytics";

type Props = {
  data: ILayoutModel;
  url: IUrl;
  pageType?: string;
};

const Layout = ({ data, url, pageType }: Props) => {
  const widgetList = data?.widgets?.filter(
    (widget) =>
      widget.widgetName !== "HeaderNavigation" && widget.widgetName !== "Footer"
  );

  return (
    <main>
      {widgetList?.map((widget: IWidgetModel, key: number) => {
        const widgetData = widget.widgetValue?.[0];
        let ariaLabel =
          WIDGET_ARIA_LABELS?.[widget.widgetName] ||
          widgetData?.title ||
          widgetData?.teaserTitle ||
          widgetData?.collectionSubTitle ||
          widgetData?.collectionTitle;

        if (!ariaLabel || ariaLabel === "-") {
          ariaLabel =
            WIDGET_FALLBACK_ARIA_LABELS?.[widget.widgetName] || "section";
        }

        return (
          <section
            className={`${widget.widgetName}`}
            key={key}
            id={data?.settings?.PlacementsAutoFocus?.[key] || undefined}
            aria-label={ariaLabel}
          >
            <WidgetGenerator
              {...widget}
              url={url}
              settings={data.settings}
              pageType={pageType}
              widgetContainerId={key}
            />
          </section>
        );
      })}
      <Analytics
        pageType={pageType}
        prop20={data?.prop20 || data?.title}
        lang={url?.locale}
      />
    </main>
  );
};

export default Layout;
