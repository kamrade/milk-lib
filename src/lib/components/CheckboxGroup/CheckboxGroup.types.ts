import type { ICheckboxProps } from '$lib';

export type CheckboxOption = {
  label: string;
  value: string;
  hint?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
};

export type CheckboxGroupProps = {
  legend: string;
  options: CheckboxOption[];
  selectedValues: string[],
  name: string;
}