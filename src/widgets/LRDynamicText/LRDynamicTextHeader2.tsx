// Modules
import { ReactNode } from "react";

// Components

type ILRDynamicTextHeader2Props = {
  children: ReactNode;
};

const LRDynamicTextHeader2: React.FC<ILRDynamicTextHeader2Props> = ({ children }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <h2 className="text-[32px] leading-[42px] lg:text-[38px] lg:leading-[52px] font-bold">
      {children}
    </h2>
  );
};
export default LRDynamicTextHeader2;
