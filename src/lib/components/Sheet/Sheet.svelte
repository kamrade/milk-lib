<script lang="ts">
  import {clickOutsideObject} from '$lib';
  import Portal from '$lib/components/Portal/Portal.svelte';
  import type { ISheetProps } from './Sheet.types';
  import {onDestroy, onMount} from "svelte";
  import {browser} from "$app/environment";

  let { children, isOpen, hide, hideOnClickOutside }: ISheetProps = $props();

  let sheetElement = $state<HTMLDivElement | null>(null)

  const handleClickOutside = (event: MouseEvent) => {
    clickOutsideObject(event, sheetElement as HTMLElement, null, () => hide?.());
  };

  onMount(() => {
    if (browser && hideOnClickOutside) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  });

  onDestroy(() => {
    if (browser && hideOnClickOutside) {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  });
</script>

<Portal>
  <div class={`Sheet ${isOpen ? 'Sheet-open' : ''}`} bind:this={sheetElement}>
    {@render children()}
  </div>
</Portal>

<style lang="scss">
  .Sheet {
    position: fixed;
    z-index: var(--zindex-sheet);
    top: 0;
    right: 0;
    height: 100vh;
    background: white;
    width: 400px;
    border-left: 1px solid var(--line-base);
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    transform: translateX(110%);
    opacity: 0;
    transition: all .3s ease-in-out;

    &.Sheet-open {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
