// Modules
import { ComponentType } from "react";
import dynamic from "next/dynamic";
import { IIcon, IIconTypes } from "./Icon.interface";

// Components
const icons: { [name in IIconTypes]: ComponentType<any> | null } = {
  EMArrowDown: dynamic(() => import("./IconComponents/EMArrowDown.icon")),
  Play: dynamic(() => import("./IconComponents/Play.icon")),
};

const Icon: React.FC<IIcon> = ({ type, className }) => {
  // Hooks
  // Variables
  const MappedIcon = icons[type];
  // Functions
  // Effects

  if (MappedIcon) return <MappedIcon className={className} />;

  return null;
};

export default Icon;
