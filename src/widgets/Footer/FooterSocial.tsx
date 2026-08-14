// Modules
import { IFooter } from "./Footer.interface";
import { getAkamayUrl } from "@/logic/utilities";

// Components
import Anchor from "@/components/Anchor/Anchor";
import Picture from "@/components/Picture/Picture";

const FooterSocial = ({
  social,
  url,
  logo
}: Omit<IFooter, "links" | "subLinks" | "copyright">) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div className="flex items-center justify-between mb-2">
      <Anchor href={`/${url?.locale}`}>
        {
          logo && <Picture src={getAkamayUrl(logo)} className="lg:w-[180px] w-[130px]" alt="EyeMed Logo and Home link" unoptimized />
        }
      </Anchor>

      <nav className="flex" aria-label="footer social nav">
        {social.map((scl, key) => (
          <Anchor href={scl?.url} isExternal key={key} className="px-1 last:pr-0 first:pl-0">
            <Picture src={scl?.icon} className="w-10 h-10" alt={scl?.altText || ''} />
          </Anchor>
        ))}
      </nav>
    </div>
  );
};
export default FooterSocial;
