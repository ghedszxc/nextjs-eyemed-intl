"use client";

// Modules
import { localesLabels } from "@/middleware";
import { IFooter } from "./Footer.interface";

// Components
import Anchor from "@/components/Anchor/Anchor";

const FooterLinks = ({
  links,
  url,
}: Omit<IFooter, "social" | "subLinks" | "copyright">) => {
  // Hooks
  // Variables
  const filteredLocaleLabels = localesLabels.filter(
    (locale) => locale.value !== url?.locale
  );

  // Functions
  const checkIfHome = (currentURL: string) => {
    if (currentURL === "/") {
      return `/${url?.locale}/`;
    }

    return currentURL;
  };

  const onRoute = (href: string) => {
    window.location.href = href;
  };

  return (
    <div className="flex items-center justify-between py-3">
      <nav className="text-base lg:text-md flex flex-wrap items-center ml-[-10px] lg:ml-[-20px]" aria-label="footer nav">
        {links.map((link, key) => (
          <Anchor
            href={checkIfHome(link?.url)}
            key={key}
            className="mx-[10px] lg:mx-[20px] py-1 block"
          >
            {link?.label}
          </Anchor>
        ))}
      </nav>

      <nav className="hidden md:flex" aria-label="footer language nav">
        {filteredLocaleLabels?.map((locale, key) => (
          <Anchor
            key={key}
            onClick={() => onRoute(`${locale.value != 'en' ? `/${locale.value}/` : '/'}${url?.route}`)} 
            href={`${locale.value != 'en' ? `/${locale.value}/` : '/'}${url?.route}`}>
            <div className="cursor-pointer ml-5 py-1 text-base">
              {locale.label}
            </div>
          </Anchor>
        ))}
      </nav>
    </div>
  );
};
export default FooterLinks;
