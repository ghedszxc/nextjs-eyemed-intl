// Modules
import { getAnalyticsId } from "@/logic/utilities";
import { IDesktopNavigationMainLink } from "../DesktopNavigation.interface";

// Components
import Anchor from "@/components/Anchor/Anchor";

const DesktopNavigationMainLinks: React.FC<IDesktopNavigationMainLink> = ({
  mainLinks = [],
  url,
}) => {
  // Hooks
  // Variables
  
  // Functions
  const checkActive = (linkPath: string) => {
    const path = url?.route?.join("/")?.trim();
    const currentLocale = url?.locale === "en" ? "" : url?.locale + "/";
    const currentPath = path ? `${currentLocale}${path}` : "";
    const formattedLinkPath = linkPath?.substring(1, linkPath.length).trim();
    
    if(formattedLinkPath === currentPath) return "mx-[20px] py-1 block text-lg border-b-[3px] border-primary text-primary";
    return "mx-[20px] py-1 text-black block text-lg";
  }
  
  const checkIfHome = (currentURL: string) => {
    if(currentURL === "/") {
      return `/${url?.locale}/`
    }

    return currentURL;
  }

  return (
    <nav className="items-center flex">
      {mainLinks.map((link, key) => (
        <Anchor
          className={checkActive(link.url)}
          href={checkIfHome(link.url)}
          data-element-id={getAnalyticsId("MainNav", link?.label)}
          data-description={link.label}
          key={key}
        >
          {link.label}
        </Anchor>
      ))}
    </nav>
  );
};
export default DesktopNavigationMainLinks;
