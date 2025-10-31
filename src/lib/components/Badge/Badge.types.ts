import type {Snippet} from "svelte";

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'warning' | 'danger' | 'outline';
export type BadgeShape = 'rounded' | 'circled' | 'straight';

export interface IBadgeProps {
  children: Snippet;
  variant?: BadgeVariant;
  shape?: BadgeShape;
  href?: string;
  ref?: HTMLAnchorElement | HTMLSpanElement | null;
}
