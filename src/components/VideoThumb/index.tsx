"use client";

// Modules
import { IVideo } from "../Video/IVideo.interface";
import useToggle from "@/hooks/useToggle";

// Components
import ClientOnlyPortal from "../ClientOnlyPortal/ClientOnlyPortal";
import Icon from "../Icon";
import Video from "../Video";
import Presence from "../utils/Presence";

const VideoThumb = ({ url }: Omit<IVideo, "closeHandler">) => {
  // Hooks
  const { toggle, toggleHandler } = useToggle();

  return (
    <div className="absolute -top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2 w-full h-full flex justify-center items-center">
      <Presence animate="opacity-1" initial="opacity-0" render={!toggle}>
        <button onClick={toggleHandler} aria-label="Play video">
          <Icon type="Play" className="fill-white" />
        </button>
      </Presence>

      <ClientOnlyPortal selector="#portal">
        <Presence animate="opacity-1" initial="opacity-0" render={toggle}>
          <Video url={url} closeHandler={toggleHandler} />
        </Presence>
      </ClientOnlyPortal>
    </div>
  );
};
export default VideoThumb;
