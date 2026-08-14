// Modules
import { INavigation } from "./Navigation.interface";

// Components
import Container from "@/components/Container";
import DesktopNavigation from "@/components/Navigation/DesktopNavigation";
import MobileNavigation from "@/components/Navigation/MobileNavigation";

const Navigation = ({ ...props }: INavigation) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div className="w-full bg-white">
      <Container>
        {/* Mobile */}
        <MobileNavigation {...props} />

        {/* Desktop */}
        <DesktopNavigation {...props} />
      </Container>
    </div>
  );
};

export default Navigation;
