// Modules
import { IVideo } from "./IVideo.interface";
import ReactPlayer from "react-player";

// Components

const Video = ({ url, closeHandler }: IVideo) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div className="fixed top-0 left-0 z-[9999] w-full h-full flex items-center justify-center p-5 md:p-20 bg-black/50">
      {/* Overlay */}
      <div className="bg-gray-900/80 absolute top-0 left-0 h-full w-full z-10"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full h-full overflow-hidden flex items-center justify-center">
        <ReactPlayer
          url={url}
          width="90vw"
          height="82vh"
          controls
          loop
          playsinline
          playing
          style={{
            margin: "auto",
            userSelect: "none",
            // backgroundColor: "black",
          }}
        />
      </div>

      {/* Close */}
      <div className="text-[30px] h-fit cursor-pointer text-white uppercase absolute top-5 right-5 lg:top-10 lg:right-10 select-none z-50"
        onClick={closeHandler}
      >
        ✕
      </div>
    </div>
  );
};
export default Video;
