// Modules
import { IFooter } from "./Footer.interface";

// Components
import Container from "@/components/Container";
import FooterSocial from "./FooterSocial";
import FooterLinks from "./FooterLinks";
import FooterSublinks from "./FooterSublinks";

const Footer = ({
  copyright,
  links = [],
  social = [],
  subLinks = [],
  url,
  logo
}: IFooter) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <div className="bg-primary text-foreground pt-[60px] text-white">
      <Container>
        <FooterSocial social={social} url={url} logo={logo} />
        <FooterLinks links={links} url={url} />
        <FooterSublinks copyright={copyright} subLinks={subLinks} url={url} />
      </Container>
    </div>
  );
};
export default Footer;
