// Modules
import Link from "next/link";
import { IAnchor } from "./Anchor.interface";

// Components
const Anchor = ({ children, className, isExternal, ...props }: IAnchor) => {
  if (!props.href) return null;

  return (
    <Link
      {...props}
      target={isExternal ? "_blank" : "_self"}
      className={className}
    >
      {children}
    </Link>
  );
};
export default Anchor;
