// Modules
import { IDesktopNavigation } from "./DesktopNavigation.interface";

// Components
import Logo from "@/components/Logo";
import DesktopNavigationMainLinks from "./DesktopNavigationMainLinks";
import DesktopNavigationLocaleDropdown from "./DesktopNavigationLocaleDropdown";

const DesktopNavigation = ({
  localeLinks,
  mainLinks,
  url,
  logo
}: IDesktopNavigation) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div className="justify-between items-center py-[20px] relative hidden lg:flex">
      <Logo url={url} logo={logo} />
      <DesktopNavigationMainLinks mainLinks={mainLinks} url={url} />
      <DesktopNavigationLocaleDropdown localeLinks={localeLinks} url={url} />
    </div>
  );
};
export default DesktopNavigation;
