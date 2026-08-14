// Modules
import { IMobileNavigationLocaleLink } from "../../MobileNavigation.interface";
import useToggle from "@/hooks/useToggle";

// Components
import Presence from "@/components/utils/Presence";
import Icon from "@/components/Icon";
import Anchor from "@/components/Anchor/Anchor";
import { localesLabels } from "@/middleware";

const MobileNavigationLocaleList = ({
  localeLinks = [],
  url,
}: IMobileNavigationLocaleLink) => {
  // Hooks
  const { toggle, toggleHandler } = useToggle();

  // Variables
  const label = localesLabels.find((locale) => locale.value === url?.locale)?.label;
  
  return (
    <div className="bg-secondary text-white items-center select-none cursor-pointer grid">
      {/* Active label */}
      <div className="flex items-center p-5" onClick={toggleHandler}>
        <span>{label}</span>
        <div className={`${toggle ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 origin-[75%_50%]`}>
          <Icon type="EMArrowDown" className="stroke-white ml-2" />
        </div>
      </div>

      {/* Dropdown */}
      <Presence
        initial="h-0"
        animate="h-[120px]"
        className="overflow-hidden relative"
        render={toggle}
      >
        <div className="absolute w-full h-full top-0 left-0 grid">
          {localeLinks.map((link, key) => (
            <Anchor className="px-5 py-2" href={`/${link?.url != 'en' ? `${link?.url}/` : ''}${url?.route}`} key={key}>
              {link.label}
            </Anchor>
          ))}
        </div>
      </Presence>
    </div>
  );
};
export default MobileNavigationLocaleList;
