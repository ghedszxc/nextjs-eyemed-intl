// Modules
import { IMobileNavigationLegalLink } from "../../MobileNavigation.interface";

// Components
import Anchor from "@/components/Anchor/Anchor";

const MobileNavigationLegalLink = ({
  legalLinks = [],
  url,
}: IMobileNavigationLegalLink) => {
  // Hooks
  // Variables
  // Functions
  const checkActive = (linkPath: string) => {
    const currentPath = url?.route?.join("/")?.trim() || "";
    const formattedLinkPath = linkPath?.substring(1, linkPath.length).trim();
    
    if(formattedLinkPath === currentPath) return "px-5 py-2 block font-bold text-sm text-main";
    return "px-5 py-2 block text-sm";
  }

  // Effects

  return (
    <div className="py-4 bg-gray">
      {legalLinks.map((link, key) => (
        <Anchor className={checkActive(link.url)} href={link.url} key={key} isExternal={link.isExternal}>
          {link.label}
        </Anchor>
      ))}
    </div>
  );
};
export default MobileNavigationLegalLink;
