import { ReactNode } from "react";

export interface IFormEntry {
  name: string;
  label: string;
  htmlFor: string;
  render: ReactNode;
  error?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
}
