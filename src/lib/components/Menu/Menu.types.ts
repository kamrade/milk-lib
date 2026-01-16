import type { Snippet } from 'svelte';

export interface IMenuProps {
  hideMenu: () => void;
  isVisible?: boolean;
  menuElement?: HTMLDivElement | null;

  parentElement: HTMLElement | null;
  appearanceOnHover?: boolean;

  menuGap?: number;
  maxHeight?: number;
  width?: number;
  minWidth?: number;
  fullWidth?: boolean;
  animate?: boolean;

  onTransitionEnd?: (e: TransitionEvent) => void;
  
  id?: string;
  children: Snippet;
}

export interface IMenuContentProps {
  children: Snippet;
}

export interface IMenuItemTitleProps {
  children: Snippet;
}

export interface IMenuItemProps {
  onClick?: () => unknown;
  children: Snippet;
}
