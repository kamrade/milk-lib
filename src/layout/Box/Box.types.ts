import type { Snippet } from "svelte";

export type BoxSize = 'default' | 'sm';

export interface IBoxProps {
  underline?: boolean;
  size?: BoxSize;
  children: Snippet;
}