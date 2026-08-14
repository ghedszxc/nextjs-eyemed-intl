// Modules
import { ILRDynamicText } from "./LRDynamicText.interface";

// Components
import Picture from "@/components/Picture/Picture";
import VideoThumb from "@/components/VideoThumb";
import AnimateOnScreen from "@/components/utils/AnimateOnScreen";

const LRDynamicTextMedia = ({
  picture,
  video,
  altText,
}: Omit<ILRDynamicText, "header1" | "header2" | "longText" | "direction">) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <AnimateOnScreen
      styleVariants={{
        hide: {
          opacity: 0,
        },
        show: {
          opacity: 1,
        },
      }}
      start={true}
      className="lg:min-w-[545px] lg:w-full mx-[-1.25rem] lg:mx-auto mb-10 lg:mb-0 relative"
      easing="ease-out"
      duration={0.6}
    >
      {picture && (
        <Picture
          src={picture}
          alt={altText || (video ? 'video thumbnail' : 'preview image')}
          className="w-full h-full object-cover"
        />
      )}

      {video && <VideoThumb url={video} />}
    </AnimateOnScreen>
  );
};
export default LRDynamicTextMedia;
