// Modules

import { IIcon } from "../Icon.interface";

// Components

const EMArrowDown: React.FC<IIcon> = ({ className }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13 1.27734L8.06061 6.21674C7.47727 6.80007 6.52273 6.80007 5.93939 6.21674L1 1.27734"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
export default EMArrowDown;
