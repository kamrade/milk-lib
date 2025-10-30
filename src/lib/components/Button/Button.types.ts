import type { Snippet } from 'svelte';

export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonInstance = {
  focus: () => void;
};

export interface IButtonProps {
  focus?: () => void;
  onClick?: (e: MouseEvent) => void;
  onMouseEnter?: (e: MouseEvent) => void;
  onMouseLeave?: (e: MouseEvent) => void;
  classNames?: string;
  disabled?: boolean;
  type?: ButtonType;
  name?: string;
  id?: string;
  block?: boolean;
  loading?: boolean;
  style?: string;
  children: Snippet;
  iconButton?: boolean;
}
