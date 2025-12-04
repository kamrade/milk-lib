<script lang="ts">
  import { getContext, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import {
    SEGMENTED_CONTROL_CONTEXT,
    type ISegmentedControlContext,
    type ISegmentedControlItemProps
  } from './SegmentedControl.types';

  const fallbackSelectedValue = writable<string | null>(null);
  const fallbackDisabled = writable(false);

  let {
    value,
    disabled = false,
    classNames = '',
    style,
    dataVariant,
    onClick,
    children
  }: ISegmentedControlItemProps = $props();

  const context = getContext<ISegmentedControlContext>(SEGMENTED_CONTROL_CONTEXT);
  const selectedValueStore = context?.selectedValue ?? fallbackSelectedValue;
  const disabledStore = context?.disabled ?? fallbackDisabled;
  const itemId = Symbol(value);
  let buttonEl: HTMLButtonElement | null = null;
  let isDisabled = $state(false);
  let isSelected = $state(false);
  let tabIndex = $state(0);

  $effect(() => {
    isDisabled = disabled || $disabledStore;
  });

  $effect(() => {
    isSelected = $selectedValueStore === value;
  });

  $effect(() => {
    const hasSelection = $selectedValueStore !== null;
    tabIndex = hasSelection ? (isSelected ? 0 : -1) : 0;
  });

  $effect(() => {
    if (context) {
      context.registerItem({
        id: itemId,
        value,
        el: buttonEl,
        disabled: isDisabled
      });
    }
  });

  let buttonClass = $state('');
  $effect(() => {
    const base = ['SegmentedControlItem'];
    if (isSelected) base.push('SegmentedControlItem--selected');
    if (isDisabled) base.push('SegmentedControlItem--disabled');
    if (classNames) base.push(classNames);
    buttonClass = base.join(' ');
  });

  onDestroy(() => {
    context?.unregisterItem(itemId);
  });

  function handleClick(event: MouseEvent) {
    if (isDisabled) return;
    context?.selectValue(value);
    onClick?.(event);
  }
</script>

<button
  type="button"
  class={buttonClass}
  role="radio"
  aria-checked={isSelected}
  aria-disabled={isDisabled}
  tabindex={tabIndex}
  data-state={isSelected ? 'on' : 'off'}
  {style}
  onclick={handleClick}
  bind:this={buttonEl}
  disabled={isDisabled}
  {...(dataVariant ? { 'data-variant': dataVariant } : {})}
>
  {@render children?.()}
</button>

<style lang="scss">

  .SegmentedControlItem {
    flex: 1;
    min-width: 0;
    border: 0;
    border-radius: var(--border-radius-button, 8px);
    background: transparent;
    color: var(--text-base-muted);
    font-size: 0.875rem;
    line-height: 1.3;
    padding: 0.35rem 0.9rem;
    cursor: pointer;
    text-align: center;
    transition: background .15s ease, color .15s ease, border-color .15s ease;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    gap: 0.35rem;
    outline: none;

    &:not(:disabled):hover {
      background: var(--bg-base);
    }
  }

  .SegmentedControlItem[data-state='on'] {
    background: var(--bg-base);
    color: var(--text-base-main);
    box-shadow: inset 0 0 0 1px var(--line-base);
  }

  .SegmentedControlItem:focus-visible {
    outline: 2px solid var(--line-control-100);
    outline-offset: 1px;
  }

  .SegmentedControlItem--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

</style>
