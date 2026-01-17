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

  let {
    children,
    isOpen,
    hide,
    hideOnClickOutside,
    side = 'right',
    size = 400,
    backdrop = false,
    bordered = false
  }: ISheetProps = $props();

  let sheetElement = $state<HTMLDivElement | null>(null)
  let shouldRender = $state(isOpen);

  const sheetClassNames = $derived(`Sheet Sheet-${side}`);
  const sheetStyle = $derived(
    (side === 'left' || side === 'right'
      ? `width: ${size}px;`
      : `height: ${size}px;`) +
    ` --sheet-border-size: ${bordered ? '1px' : '0px'};`
  );
  const backdropStyle = $derived(
    side === 'left'
      ? `left: 0; right: 0; top: 0; bottom: 0;`
      : side === 'right'
        ? `left: 0; right: 0; top: 0; bottom: 0;`
        : side === 'top'
          ? `left: 0; right: 0; top: 0; bottom: 0;`
          : `left: 0; right: 0; top: 0; bottom: 0;`
  );

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
        shouldRender = false;
      }
    }
  }

</script>

<Portal>
  {#if shouldRender}
    {#if backdrop}
      <div
        class={`Sheet-backdrop ${isOpen ? "Sheet-backdrop-open" : ""}`}
        style={backdropStyle}
      ></div>
    {/if}
    <div
      class={sheetClassNames}
      style={sheetStyle}
      bind:this={sheetElement}
      ontransitionend={handleTransitionEnd}
    >
      {@render children()}
    </div>
  {/if}
</Portal>

<style lang="scss">
  .Sheet-backdrop {
    position: fixed;
    inset: 0;
    z-index: var(--zindex-offcanvas-backdrop);
    background-color: var(--bg-backdrop-light);
    backdrop-filter: blur(8px);
    opacity: 0;
    transition: opacity .3s ease-in-out;
  }

  .Sheet-backdrop-open {
    opacity: 1;
  }

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
    --sheet-border-size: 1px;

    @media (max-width: 480px) {
      width: 100% !important;
    }

    &.Sheet-right {
      right: 0;
      left: auto;
      border-left: var(--sheet-border-size) solid var(--line-base);
      transform: translateX(110%);
    }

    &.Sheet-left {
      left: 0;
      right: auto;
      border-right: var(--sheet-border-size) solid var(--line-base);
      transform: translateX(-110%);
    }

    &.Sheet-top {
      top: 0;
      bottom: auto;
      left: 0;
      right: 0;
      width: 100vw;
      height: 400px;
      border-bottom: var(--sheet-border-size) solid var(--line-base);
      transform: translateY(-110%);
    }

    &.Sheet-bottom {
      top: auto;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100vw;
      height: 400px;
      border-top: var(--sheet-border-size) solid var(--line-base);
      transform: translateY(110%);
    }

    &.Sheet-open {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
</style>
