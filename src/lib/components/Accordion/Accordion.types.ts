import type {Snippet} from "svelte";
import type {Writable} from "svelte/store";

export interface IAccordionProps {
  children: Snippet;
  value: string | null;
}

export interface IAccordionItemProps {
  children: Snippet;
  value: string | null;
}

export interface IAccordionTriggerProps {
  children: Snippet;
}

export interface IAccordionContentProps {
  children: Snippet;
}



export interface IAccordionContext {
  value: Writable<string | null>;
  open: (val: string | null) => unknown;
  close: () => unknown;
}
export interface IAccordionItemContext {
  isOpen: Writable<boolean>;
  value: string | null;
}
