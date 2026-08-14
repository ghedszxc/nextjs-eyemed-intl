import { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface IAnchor extends LinkProps {
  children: ReactNode;
  className?: string;
  isExternal?: boolean;
}
