export interface ICombobox {
  options: any;
  name: string;
  value: any;
  onChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  disabled?: boolean;
  className?: string;
}
