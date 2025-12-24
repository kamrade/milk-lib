<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type {IAccordionContentProps, IAccordionItemContext} from "./Accordion.types";

  let { children }: IAccordionContentProps = $props();
  const { isOpen } = getContext<IAccordionItemContext>('accordion-item-context');
  let accordionContent: HTMLDivElement | null = $state(null);
  let height = $state(0);

  const recalcHeight = () => {
    height = accordionContent?.getBoundingClientRect?.().height ?? 0;
  };

  $effect(() => {
    recalcHeight();
  });

  onMount(() => {
    window.addEventListener('resize', recalcHeight);
    return () => window.removeEventListener('resize', recalcHeight);
  });

</script>

<div class="AccordionContentWrapper" style={`height: ${$isOpen ? height + 8 : 0}px`}>
  <div class="AccordionContent" bind:this={accordionContent}>
    {@render children()}
  </div>
</div>

<style lang="scss">
  .AccordionContent {
    margin-bottom: 1em;
  }

  .AccordionContentWrapper {
    overflow: hidden;
    height: 0;
    transition: all .3s ease-in-out;
  }
</style>
