import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { IFormEntry } from "./IFormEntry.interface";
import { Asterisk } from "lucide-react";
import { FC } from "react";

const FormEntry: FC<IFormEntry> = ({
  name,
  label,
  htmlFor,
  render,
  error,
  required,
  className,
}) => (
  <div
    className={cn(
      "grid w-full gap-0.5",
      error &&
        "child-input:border-rose-700 child-input-focus:border-2 child-input-focus:border-rose-700 child-input-focus-visible:outline-none child-input-focus-visible:ring-0 child-button:border-rose-700 child-button-focus:border-2 child-button-focus:border-rose-700 child-button-focus-visible:outline-none child-button-focus-visible:ring-0 child-textarea:border-rose-700 child-textarea-focus:border-2 child-textarea-focus:border-rose-700 child-textarea-focus-visible:outline-none child-textarea-focus-visible:ring-0",
      className
    )}
  >
    <div className="flex gap-1">
      <Label
        htmlFor={htmlFor}
        className="leading-5 font-bold flex items-center text-[14px]"
        // role="contact-label"
      >
        {label?.charAt(0)?.toUpperCase() + label?.slice(1)}
        {required && (
          <Asterisk size="14" className="text-rose-500 ml-1 mt-[-8px]" />
        )}
      </Label>
    </div>
    {render}
    {error && <p className="error_message mt-2">{error}</p>}
  </div>
);

export default FormEntry;
