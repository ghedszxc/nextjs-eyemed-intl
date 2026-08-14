import * as React from "react";
import { cn } from "@/lib/utils";
import AppConfig from "@/logic/configs/AppConfig";

const MAX_INPUT_LENGTH = 200;

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, onChange, ...props }, ref) => {
    const [charCount, setCharCount] = React.useState<number>(0);

    const handleInputChange = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setCharCount(event.target.value.length);
      onChange && onChange(event);
    };

    return (
      <>
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          maxLength={MAX_INPUT_LENGTH}
          {...props}
          onChange={handleInputChange}
        />
        <p className="text-base text-left min-w-24 mt-1">
          {`${charCount} / ${MAX_INPUT_LENGTH}`} {AppConfig.getTranslatedPlaceholder(props?.lang)}
        </p>
      </>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
