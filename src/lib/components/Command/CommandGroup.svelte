<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type { ICommandGroupProps } from './Command.types';
  let { heading, children } : ICommandGroupProps = $props();

  let commandGroupItemsVisibility = writable<Record<symbol, boolean>>({});
  setContext('command-group-visibility', { commandGroupItemsVisibility });
  let allFalse = $derived(Object.getOwnPropertySymbols($commandGroupItemsVisibility)
        .every(sym => $commandGroupItemsVisibility[sym] === false));



</script>



<div class="CommandGroup" class:hidden={allFalse} >
  {#if heading}
    <div class="CommandGroup-heading">{heading}</div>
  {/if}
  {@render children()}
</div>



<style lang="scss">
  
  .CommandGroup {
    padding: var(--group-padding-y) var(--group-padding-x);
    border-bottom: 1px solid var(--border-color);

    &.hidden {
      display: none;
    }

    &:last-of-type {
      border-bottom: none;
      padding: 0 var(--group-padding-x);
    }
  }

  .CommandGroup .CommandGroup-heading {
    padding: var(--padding-y) var(--padding-x);
    color: var(--group-heading-color);
    font-size: 0.875em;
  }

</style>
