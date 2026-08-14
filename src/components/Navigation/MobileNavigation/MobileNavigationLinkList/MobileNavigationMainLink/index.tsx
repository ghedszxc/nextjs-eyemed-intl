// Modules
import { IMobileNavigationMainLink } from "../../MobileNavigation.interface";

// Components
import Anchor from "@/components/Anchor/Anchor";

const MobileNavigationMainLink = ({
  mainLinks,
  url,
}: IMobileNavigationMainLink) => {
  // Hooks
  // Variables
  // Functions
  const checkActive = (linkPath: string) => {
    const path = url?.route?.join("/")?.trim();
    const currentLocale = url?.locale === "en" ? "" : url?.locale + "/";
    const currentPath = path ? `${currentLocale}${path}` : "";
    const formattedLinkPath = linkPath?.substring(1, linkPath.length).trim();
    
    if(formattedLinkPath === currentPath) return "px-5 py-4 block font-bold text-main";
    return "px-5 py-4 block";
  }
  
  const checkIfHome = (currentURL: string) => {
    if(currentURL === "/") {
      return `/${url?.locale}/`
    }

    return currentURL;
  }

  // Effects

  return (mainLinks || []).map((link, key) => (
    <Anchor
      className={checkActive(link.url)}
      href={checkIfHome(link.url)}
      key={key}
    >
      {link.label}
    </Anchor>
  ));
};
export default MobileNavigationMainLink;
