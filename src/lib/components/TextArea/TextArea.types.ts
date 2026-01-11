import type { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, MouseEventHandler } from "svelte/elements";

export type TextAreaInstance = {
  focus: () => void;
};

export interface ITextAreaProps {
  value?: string;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
  onKeyUp?: KeyboardEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  oninput?: ChangeEventHandler<HTMLTextAreaElement>;
  onClick?: MouseEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  name?: string;
  id?: string;
  invalid?: boolean;
  style?: string;
  classNames?: string;
  autoFocus?: boolean;
  rows?: number;
  cols?: number;

  ariaHasPopup?: "dialog" | "menu" | "listbox" | "tree" | "grid" | null | undefined;
  ariaExpanded?: boolean;
  ariaControls?: string;
  dataVariant?: string;
}
