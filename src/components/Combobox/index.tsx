import { FC, useState } from "react";
// import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "../ui/scroll-area";
import { ICombobox } from "./ICombobox.interface";

export const Combobox: FC<ICombobox> = ({
  options,
  placeholder,
  searchPlaceholder,
  name,
  onChange,
  value,
  className,
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);

  const displaySelected = () => {
    if (!value) return placeholder;

    // TO DO: correct the type - should be type of option
    const selectedOption = options.find(
      (option: any) => option.value === value
    );

    return selectedOption?.label;
  };

  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "justify-between font-normal overflow-hidden",
            className
          )}
        >
          <p className="text-ellipsis overflow-hidden">{displaySelected()}</p>
          <ChevronDown className={cn("ml-2 h-4 w-4 shrink-0 opacity-50")} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-fit max-w-72 px-0 py-1">
        <Command>
          <CommandInput
            placeholder={searchPlaceholder || "Search options"}
            className="h-9 m-1"
          />
          <ScrollArea className="h-52 scroll-auto ">
            <CommandEmpty>Nothing found.</CommandEmpty>
            <CommandGroup>
              {options.map((option: any) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue);
                    setOpen(false);
                  }}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
