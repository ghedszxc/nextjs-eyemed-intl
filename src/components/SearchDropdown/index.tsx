import { FC, useState } from "react";
import { IDropdownItem, IDropdownOptions } from "./ISearchDropdown.interface";

import {
  SearchCommand,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/search-command";

const SearchDropdown: FC<IDropdownOptions> = ({
  value,
  options,
  placeholder,
  onSelect,
  ...props
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const displaySelected = () => {
    if (!value) return placeholder || "Select...";

    const selectedOption = options.find(
      (option: IDropdownItem) => option.value === value
    );

    return selectedOption?.label;
  };

  const handleSelect = (currentValue: any) => {
    onSelect(currentValue);
    // setSearchQuery(currentValue);
  };

  return (
    <div className="relative" {...props}>
      <SearchCommand
        onClick={() => setShowOptions((prevValue) => !prevValue)}
        onBlur={() => setShowOptions(false)}>
        <CommandInput
          placeholder={displaySelected()}
          value={searchQuery}
          onValueChange={(value: string) => setSearchQuery(value)}
        />
        {showOptions && (
          <CommandList className="absolute left-0 top-12 bg-white rounded-md border w-full z-10">
            <CommandEmpty>No options</CommandEmpty>
            <CommandGroup>
              {options.map((option: IDropdownItem) => (
                <CommandItem
                  key={option.value}
                  className={
                    !!value && value === option.value
                      ? "bg-blue-600 text-primary-foreground"
                      : ""
                  }
                  onSelect={handleSelect}
                >
                  <span>{option.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </SearchCommand>
    </div>
  );
};

export default SearchDropdown;
