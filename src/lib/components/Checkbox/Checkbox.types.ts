export interface ICheckboxProps {
  checked?: boolean;
  disabled?: boolean; 
  id?: string; 
  name?: string;
  value?: string; 
  ariaLabel?: string;
  required?: boolean;
  indeterminate?: boolean;
  toggleOption?: (value: string) => void;
}