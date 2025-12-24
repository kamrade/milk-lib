<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from 'svelte/store';
  import type { IAccordionProps, IAccordionContext } from './Accordion.types';

  let { children, value }: IAccordionProps = $props();

  // Initialisation
  const innerValue = writable<string | null>(value);
  const open = (val: string | null) => innerValue.set(val);
  const close = () => innerValue.set(null);

  // Reactivity
  // If value changed
  $effect(() => innerValue.set(value));

  setContext<IAccordionContext>('accordion-context', { value: innerValue, open, close });
</script>

<div class="AccordionRoot">
  {@render children()}
</div>
