"use client";

// Modules
import useToggle from "@/hooks/useToggle";
import { IDesktopNavigationLocaleLink } from "../DesktopNavigation.interface";
import { localesLabels } from "@/middleware";

// Components
import Icon from "@/components/Icon";
import Anchor from "@/components/Anchor/Anchor";
import Presence from "@/components/utils/Presence";

const DesktopNavigationLocaleDropdown: React.FC<
  IDesktopNavigationLocaleLink
> = ({ localeLinks = [], url }) => {
  // Hooks
  const { toggle, toggleHandler } = useToggle();

  // Variables
  const label = localesLabels.find(
    (locale) => locale.value === url?.locale
  )?.label;

  const filteredLocaleLabels = localesLabels.filter(
    (locale) => locale.value !== url?.locale
  );

  // Functions
  const onRoute = (href: string) => {
    window.location.href = href;
  };

  return (
    <button className="flex items-center relative select-none" onClick={toggleHandler}>
      <div className="rounded bg-card px-5 py-3 flex items-center cursor-pointer">
        <span>{label}</span>
        <div className={`${toggle ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 origin-[75%_50%]`}>
          <Icon type="EMArrowDown" className="stroke-black ml-2" />
        </div>
      </div>

      {/* List */}
      <Presence initial="opacity-0" animate="opacity-100" render={toggle} className="absolute left-0 top-[100%] w-full">
        <ul className="flex flex-col text-left bg-card z-10 shadow-sm">
          {filteredLocaleLabels?.map((link, key) => (
            <li className="language cursor-pointer hover:bg-slate-200 focus-within:bg-slate-200 relative" key={key}>
              <Anchor onClick={() => onRoute(`/${link?.value != 'en' ? `${link?.value}/` : ''}${url?.route}`)} href={`/${link?.value != 'en' ? `${link?.value}/` : ''}${url?.route}`} className="px-5 py-2 flex">
                {link.label}
              </Anchor>
            </li>
          ))}
        </ul>
      </Presence>
    </button>
  );
};
export default DesktopNavigationLocaleDropdown;
