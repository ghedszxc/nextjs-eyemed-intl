// Modules
import { IIcon } from "../Icon.interface";

// Components

const PlayIcon = ({ className }: IIcon) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      widths="100px"
      height="100px"
      viewBox="0 0 18 18"
      className={className}
    >
      <path
        id="i_player-video"
        d="M15.516,11.3a.843.843,0,0,1,.421.7.857.857,0,0,1-.421.738l-5.063,3.094a.811.811,0,0,1-.844,0,.79.79,0,0,1-.421-.738V8.906a.773.773,0,0,1,.421-.7.74.74,0,0,1,.844,0L15.516,11.3Zm-5.2-1.863V14.6l4.22-2.6ZM3,12a9,9,0,1,1,9,9A8.995,8.995,0,0,1,3,12Zm9,7.875a7.862,7.862,0,1,0-5.572-2.3A7.885,7.885,0,0,0,12,19.875Z"
        transform="translate(-3 -3)"
      ></path>
    </svg>
  );
};
export default PlayIcon;
