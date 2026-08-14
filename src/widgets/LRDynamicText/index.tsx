// Modules
import AppConfig from "@/logic/configs/AppConfig";
import { ILRDynamicText } from "./LRDynamicText.interface";

// Components
import Container from "@/components/Container";
import LRDynamicTextHeader1 from "./LRDynamicTextHeader1";
import LRDynamicTextMedia from "./LRDynamicTextMedia";
import LRDynamicTextHeader2 from "./LRDynamicTextHeader2";
import LRDynamicTextLongtext from "./LRDynamicTextLongtext";
import AnimateSwipe from "@/components/utils/AnimateSwipe";

const LRDynamicText = ({
  header1,
  header2,
  longText,
  picture,
  video,
  direction,
  bg,
  padding = "both",
  altText,
}: ILRDynamicText) => {
  // Hooks
  // Variables
  // Functions
  const getPadding = AppConfig.getWidgetPadding;

  // Effects

  return (
    <div style={{ backgroundColor: bg }}>
      <Container>
        {header1 && <AnimateSwipe>
          <LRDynamicTextHeader1 className="mt-20">{header1}</LRDynamicTextHeader1>
        </AnimateSwipe>}

        {/* Content */}
        <div data-testid="lrd-flex-wrapper" className={`flex flex-col ${direction === "right" ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch py-10 md:py-[60px] lg:py-20 ${getPadding(padding, "md")} ${getPadding(padding, "lg")}`}>
          {/* Image */}
          <LRDynamicTextMedia picture={picture} video={video} altText={altText} />

          {/* Text */}
          <AnimateSwipe>
            <div className={`"w-full flex flex-col justify-center" ${direction === "right" ? "lg:pr-10 md:py-10" : "lg:pl-10 md:py-10"}`}>
              {header2 && <LRDynamicTextHeader2>{header2}</LRDynamicTextHeader2>}
              {longText && <LRDynamicTextLongtext>{AppConfig.html(longText)}</LRDynamicTextLongtext>}
            </div>
          </AnimateSwipe>
        </div>
      </Container>
    </div>
  );
};

export default LRDynamicText;
