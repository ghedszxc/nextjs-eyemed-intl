// Modules
import { ILogo } from "./Logo.interface";
import { getAkamayUrl } from "@/logic/utilities";

// Components
import Anchor from "../Anchor/Anchor";
import Picture from "../Picture/Picture";

const Logo = ({ url, logo }: ILogo) => {
  return (
    <Anchor href={`/${url?.locale}/`}>
      {/* /images/logo.svg */}
      {
        logo && <Picture
        src={getAkamayUrl(logo)}
        alt="EyeMed Logo and Home link"
        priority
        style={{
          width: "110px",
          height: "auto",
        }}
        unoptimized
      />
      }
    </Anchor>
  );
};
export default Logo;
