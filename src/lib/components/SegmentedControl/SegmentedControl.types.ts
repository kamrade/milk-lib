import type { Snippet } from 'svelte';
import type { Writable } from 'svelte/store';

/** Shared context key so items can find the current root instance. */
export const SEGMENTED_CONTROL_CONTEXT = Symbol('segmented-control');

export type SegmentedControlOrientation = 'horizontal' | 'vertical';

export interface ISegmentedControlItemEntry {
  id: symbol;
  value: string;
  el: HTMLButtonElement | null;
  disabled?: boolean;
}

export interface ISegmentedControlContext {
  orientation: SegmentedControlOrientation;
  disabled: Writable<boolean>;
  selectedValue: Writable<string | null>;
  selectValue: (value: string) => void;
  registerItem: (entry: ISegmentedControlItemEntry) => void;
  unregisterItem: (id: symbol) => void;
}

export interface ISegmentedControlRootProps {
  /** Controlled value. */
  value?: string | null;
  /** Fallback selection when `value` is not supplied. */
  defaultValue?: string;
  /** Exposed gap between items. */
  gap?: string;
  /** Direction of the control. */
  orientation?: SegmentedControlOrientation;
  /** Disable the whole control. */
  disabled?: boolean;
  /** Custom CSS class names for the root wrapper. */
  classNames?: string;
  /** Inline style helpers for the root wrapper. */
  style?: string;
  /** Arbitrary variant attribute. */
  dataVariant?: string;
  /** Callback that fires when the active value changes. */
  onValueChange?: (value: string) => void;
  children: Snippet;
}

export interface ISegmentedControlItemProps {
  /** Unique identifier for the item (must be provided). */
  value: string;
  /** Disable just this item. */
  disabled?: boolean;
  /** Custom CSS class names applied to the item button. */
  classNames?: string;
  /** Inline styles for the item button. */
  style?: string;
  /** Arbitrary variant attribute. */
  dataVariant?: string;
  /** Click handler passed from the consumer. */
  onClick?: (event: MouseEvent) => void;
  children: Snippet;
}
