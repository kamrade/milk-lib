import type { Snippet } from 'svelte';
import { type Writable } from 'svelte/store';

export interface ICommandRootProps {
  classNames?: string;
  children: Snippet;
  maxHeight?: number;
}

export interface ICommandListProps {
  children: Snippet;
}

export interface ICommandGroupProps {
  heading?: string;
  children: Snippet;
}

export interface ICommandItemProps {
  disabled?: boolean;
  onClick?: (e: MouseEvent | null) => void;
  children: Snippet;
}

export type CommandItemEntry = { 
  el: HTMLElement; 
  id: symbol;
  disabled?: boolean;
};

export interface ICommandItems {
  items: Writable<CommandItemEntry[]>;
  activeItemId: Writable<symbol>;
  searchQuery: Writable<string>;
}
