// Modules
import { IMobileNavigationLinkList } from "../MobileNavigation.interface";

// Components
import Presence from "@/components/utils/Presence";
import MobileNavigationLocaleLink from "./MobileNavigationLocaleLink";
import MobileNavigationMainLink from "./MobileNavigationMainLink";
import MobileNavigationLegalLink from "./MobileNavigationLegalLink";

const MobileNavigationLinkList = ({
  mainLinks = [],
  localeLinks = [],
  legalLinks = [],
  url,
  isActive,
}: IMobileNavigationLinkList) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Presence animate="opacity-1 relative" initial="opacity-0 relative" render={isActive}>
      <div className="flex flex-col absolute left-[-20px] right-[-20px] top-[100%] bg-white md:w-2/4 md:ml-auto shadow-sm">
        {/* Main links */}
        <MobileNavigationMainLink mainLinks={mainLinks} url={url} />

        {/* language selector */}
        <MobileNavigationLocaleLink localeLinks={localeLinks} url={url} />

        {/* Legal Links */}
        <MobileNavigationLegalLink legalLinks={legalLinks} url={url} />
      </div>
    </Presence>
  );
};
export default MobileNavigationLinkList;
