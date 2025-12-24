<script lang="ts">
  import { setContext, getContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type {IAccordionContext, IAccordionItemContext, IAccordionItemProps} from "./Accordion.types";

  let { children, value }: IAccordionItemProps = $props();
  const accordionState = getContext<IAccordionContext>('accordion-context');

  let isOpen = writable(false);
  let currentValue = $state<string | null>(null);
  accordionState.value.subscribe((val: string | null) => currentValue = val);
  setContext('accordion-item-context', { isOpen, value });

  $effect(() => {
    isOpen.set(value === currentValue);
    setContext<IAccordionItemContext>('accordion-item-context', { isOpen, value });
  });

</script>

<div class="AccordionItem">
  {@render children()}
</div>

<style lang="scss">
  .AccordionItem {
    border-bottom: 1px solid var(--line-base);
  }
</style>
