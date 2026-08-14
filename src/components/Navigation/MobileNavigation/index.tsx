"use client";

// Modules
import { IMobileNavigation } from "./MobileNavigation.interface";
import useToggle from "@/hooks/useToggle";

// Components
import Logo from "@/components/Logo";
import Hamburger from "@/components/Hamburger";
import MobileNavigationLinkList from "./MobileNavigationLinkList";

const MobileNavigation = ({ ...props }: IMobileNavigation) => {
  // Hooks
  const { toggle, toggleHandler } = useToggle();


  return (
    <div className="relative lg:hidden">
      <div className="py-2 flex justify-between items-center bg-white">
        <Logo url={props?.url} logo={props?.logo} />
        <Hamburger handleToggle={toggleHandler} isActive={toggle} />
      </div>
      <MobileNavigationLinkList {...props} isActive={toggle} />
    </div>
  );
};

export default MobileNavigation;
