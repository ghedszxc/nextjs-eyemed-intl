// Modules
import { ReactNode } from "react";

// Components

type ILRDynamicTextLongtextProps = {
  children: ReactNode;
};

const LRDynamicTextLongtext: React.FC<ILRDynamicTextLongtextProps> = ({
  children,
}) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return <div className="mt-5 text-lg prose-list">{children}</div>;
};
export default LRDynamicTextLongtext;
