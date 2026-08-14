// Modules
import { cva } from "class-variance-authority";
import { IHeroBanner } from "./HeroBanner.interface";
import AppConfig from "@/logic/configs/AppConfig";

// Components
import ResponsivePicture from "@/components/Picture/ResponsivePicture";
import AnimateSwipe from "@/components/utils/AnimateSwipe";

const cvaVariants = cva([], {
  variants: {
    height: {
      small: ["h-[164px] relative"],
      // medium: ["h-[596px] relative"],
      // large: ["h-[300px] sm:h-[400px] md:h-[558px] lg:h-[677px] relative"],
      medium: ["h-[47.3vh] md:h-[66.7vh] lg:h-[63vh] relative"],
      large: ["h-[47.3vh] md:h-[66.7vh] lg:h-[71.6vh] relative"],
    },
    noImageHeight: {
      small: ["h-[164px] relative"],
      medium: ["h-[596px] relative"],
      large: ["h-[683px] relative"],
    },
    fontSize: {
      small: ["text-white text-center text-[32px] lg:text-[40px] font-bold"],
      medium: ["text-white text-center text-[42px] lg:text-[56px] font-bold"],
      large: ["text-white text-center text-[42px] lg:text-[56px] font-bold"],
    },
  },
});

const HeroBanner = ({ picture, title1, variant, fallbackImage, altText }: IHeroBanner) => {
  // Hooks
  // Variables
  const heightClass = cvaVariants({ height: variant });
  const heightClassNoImage = cvaVariants({ noImageHeight: variant });
  const fontClass = cvaVariants({ fontSize: variant });

  // Functions
  // Effects

  return (
    <AnimateSwipe>
      <div className="overflow-hidden bg-gradient-to-r from-gradient-blue to-black">
        <div className={picture ? heightClass : heightClassNoImage}>
          {(picture || fallbackImage) && (
            <ResponsivePicture
              crops={picture}
              url={fallbackImage}
              name="HeroBanner"
              type="widgets"
              className="object-cover"
              alt={altText || "featured content"}
            />
          )}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-full px-5">
            {title1 && <h1 className={fontClass}>{AppConfig.html(title1)}</h1>}
          </div>
        </div>
      </div>
    </AnimateSwipe>
  );
};
export default HeroBanner;
