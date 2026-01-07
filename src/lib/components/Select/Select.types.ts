import type { TextInputMilkSizes, TextInputMilkVariants } from '$lib/components/TextInputMilk/TextInputMilk.types';

export interface ISelectItem {
  title: string;
  value: string;
}

export interface ISelectGroupData {
  heading: string;
  items: ISelectItem[];
}

export interface ISelectProps {
  searchable?: boolean;
  options: ISelectGroupData[] | ISelectItem[] | Promise<(ISelectGroupData[] | ISelectItem[])>;
  value: ISelectItem | null;
  placeholder?: string;
  disabled?: boolean;
  fullWidthMenu?: boolean;
  minWidthMenu?: number;
  menuGap?: number;
  menuMaxHeight?: number;
  size?: TextInputMilkSizes;
  variant?: TextInputMilkVariants;
  onClear?: () => void;
}
