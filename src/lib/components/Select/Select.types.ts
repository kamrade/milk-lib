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
  onClear?: () => void;
}
