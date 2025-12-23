export type CheckboxGroupHeader = {
  kind: 'header';
  label: string;
  hint?: string;
  id?: string;
};

export type CheckboxOption = {
  kind?: 'option';
  label: string;
  value: string;
  hint?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
};

export type CheckboxGroupItem = CheckboxOption | CheckboxGroupHeader;

export type CheckboxGroupProps = {
  legend: string;
  options: CheckboxGroupItem[];
  selectedValues: string[],
  name: string;
  maxHeight?: number | string;
}
