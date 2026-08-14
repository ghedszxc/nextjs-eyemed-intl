// Modules
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// Components

type ILRDynamicTextHeader1Props = {
  className?: string;
  children: ReactNode;
};

const LRDynamicTextHeader1: React.FC<ILRDynamicTextHeader1Props> = ({
  children,
  className,
}) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <h2
      className={cn(
        "text-[32px] leading-[42px] lg:text-[38px] lg:leading-[52px] font-bold text-center max-w-[956px] m-auto",
        className
      )}
    >
      {children}
    </h2>
  );
};
export default LRDynamicTextHeader1;
