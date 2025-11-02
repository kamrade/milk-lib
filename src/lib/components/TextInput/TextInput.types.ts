import type { Snippet } from "svelte";
import type { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, MouseEventHandler } from "svelte/elements";

export type TextInputType = "text" | "password";

export type TextInputInstance = {
  focus: () => void;
};

export interface ITextInputProps {
  value?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: TextInputType;
  disabled?: boolean;
  readonly?: boolean;
  name?: string;
  id?: string;
  invalid?: boolean;
  style?: string;
  classNames?: string;
  autoFocus?: boolean;

  ariaHasPopup?: "dialog" | "menu" | "listbox" | "tree" | "grid" | null | undefined;
  ariaExpanded?: boolean;
  ariaControls?: string;
}

export type ITextInputMessageVariant = 'default' | 'error';

export interface ITextInputMessageProps {
  variant?: ITextInputMessageVariant;
  children: Snippet;
}