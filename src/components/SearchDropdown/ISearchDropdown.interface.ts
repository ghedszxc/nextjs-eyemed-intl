export interface IDropdownItem {
  label: string;
  value: string;
}

export interface IDropdownOptions {
  options: Array<IDropdownItem>;
  onSelect: (value: string) => void;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
}
