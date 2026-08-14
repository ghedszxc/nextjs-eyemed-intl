import { IDropdownOptions } from "../SearchDropdown/ISearchDropdown.interface";
import Select from "react-select";

const SelectInput: React.FC<IDropdownOptions> = ({
  id,
  value,
  options,
  placeholder,
  onSelect,
  ...props
}) => {
  const handleSelect = (currentValue: any) => {
    onSelect(currentValue?.value);
  };

  return (
    <Select
      {...props}
      className="outline-input"
      instanceId={id}
      inputId={id}
      options={options as any}
      onChange={handleSelect}
    />
  );
};

export default SelectInput;
