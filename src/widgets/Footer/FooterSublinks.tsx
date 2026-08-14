// Modules
import { IFooter } from "./Footer.interface";

// Components
import Anchor from "@/components/Anchor/Anchor";

const FooterSublinks = ({
  subLinks,
  copyright,
}: Omit<IFooter, "social" | "links">) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <nav className="flex items-center justify-center md:justify-between py-3 border-t border-white-1" aria-label="footer sub-nav">
      <div className="text-xs lg:text-base">{copyright}</div>

      <div className="hidden md:block">
        <div className="flex items-center md:max-lg:mr-[-10px] mr-[-20px] md:max-lg:text-base">
          {subLinks.map((sl, key) => (
            <Anchor
              className="md:max-lg:mx-[10px] mx-[20px] py-1 block text-base"
              href={sl?.url}
              key={key}
              isExternal={sl?.isExternal}
            >
              {sl?.label}
            </Anchor>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default FooterSublinks;
