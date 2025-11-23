import { type Snippet } from "svelte";

export interface IModalProps {
  isVisible?: boolean;
  hideModal?: () => unknown;
  showCloseButton?: boolean;
  hideOnEscape?: boolean;
  blackout?: boolean;
  closeOnBackdrop?: boolean;
  children: Snippet;
}

export interface IModalDialogProps {
  rounded?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: Snippet;
}

export interface IDialogHeaderProps {
  children: Snippet;
}

export interface IDialogFooterProps {
  children: Snippet;
}

export interface IDialogTitleProps {
  children: Snippet;
}

export interface IDialogDescriptionProps {
  children: Snippet;
}

export interface IDialogContentProps {
  children: Snippet;
}
