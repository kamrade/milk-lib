<!-- 
  TODO: Сейчас при смене пропса side на лету анимация слегка корявая
  Нужно будет подумать как ее сделать поприятнее.
-->

<script lang="ts">
  import { clickOutsideObject } from '$lib';
  import Portal from '$lib/components/Portal/Portal.svelte';
  import type { ISheetProps } from './Sheet.types';
  import { onDestroy, onMount } from "svelte";
  import { browser } from "$app/environment";

  let { children, isOpen, hide, hideOnClickOutside, side = 'right' }: ISheetProps = $props();

  let sheetElement = $state<HTMLDivElement | null>(null)
  let shouldRender = $state(isOpen);

  const sheetClassNames = $derived(`Sheet Sheet-${side}`);

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

  $effect(() => {
    if (isOpen) {
      shouldRender = true;
      
      const timeout = setTimeout(() => {
        if (sheetElement) {
          sheetElement.classList.add('Sheet-open');
        }
      });
      return () => clearTimeout(timeout);
      
    } else {
      if (sheetElement) {
        sheetElement.classList.remove('Sheet-open');
      }
    }
  });

  const handleTransitionEnd = (e: TransitionEvent) => {
    e.stopPropagation();
    if (!isOpen) {
      if (e.propertyName === 'transform') {
        console.log('hide');
        shouldRender = false;
      }
    }
  }

</script>

<Portal>
  {#if shouldRender}
    <div 
      class={sheetClassNames} 
      bind:this={sheetElement} 
      ontransitionend={handleTransitionEnd}
    >
      {@render children()}
    </div>
  {/if}
</Portal>

<style lang="scss">
  .Sheet {
    position: fixed;
    z-index: var(--zindex-sheet);
    top: 0;
    height: 100vh;
    max-height: 100vh;
    background: white;
    width: 400px;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    opacity: 0;
    transition: all .3s ease-in-out;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 400px) {
      width: 100%;
    }

    &.Sheet-right {
      right: 0;
      left: auto;
      border-left: 1px solid var(--line-base);
      transform: translateX(110%);
    }

    &.Sheet-left {
      left: 0;
      right: auto;
      border-right: 1px solid var(--line-base);
      transform: translateX(-110%);
    }

    &.Sheet-open {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
