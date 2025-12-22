<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import {
    SEGMENTED_CONTROL_CONTEXT,
    type ISegmentedControlContext,
    type ISegmentedControlItemEntry,
    type ISegmentedControlRootProps
  } from './SegmentedControl.types';

  let {
    value = $bindable(),
    defaultValue,
    orientation = 'horizontal',
    gap = '2px',
    disabled = false,
    classNames = '',
    style,
    dataVariant,
    onValueChange,
    children
  }: ISegmentedControlRootProps = $props();

  if (value === undefined && defaultValue !== undefined) {
    value = defaultValue;
  }

  const selectedValue = writable<string | null>(value ?? defaultValue ?? null);
  const disabledState = writable<boolean>(disabled);
  let items: ISegmentedControlItemEntry[] = [];

  function registerItem(entry: ISegmentedControlItemEntry) {
    const index = items.findIndex(item => item.id === entry.id);
    if (index === -1) {
      items = [...items, entry];
    } else {
      items = [
        ...items.slice(0, index),
        entry,
        ...items.slice(index + 1)
      ];
    }
  }

  function unregisterItem(id: symbol) {
    items = items.filter(item => item.id !== id);
  }

  function selectValue(newValue: string) {
    if (disabled) return;
    if (value === newValue) return;
    const target = items.find(item => item.value === newValue);
    if (target?.disabled) return;
    value = newValue;
    selectedValue.set(newValue);
    onValueChange?.(newValue);
  }

  const context: ISegmentedControlContext = {
    orientation,
    disabled: disabledState,
    selectedValue,
    selectValue,
    registerItem,
    unregisterItem
  };

  setContext(SEGMENTED_CONTROL_CONTEXT, context);

  $effect(() => {
    context.orientation = orientation;
  });

  $effect(() => {
    disabledState.set(disabled);
  });
  
  $effect(() => {
    selectedValue.set(value ?? defaultValue ?? null);
  });

  let rootStyle = $state('');
  $effect(() => {
    const normalized = style ? style.trim() : '';
    const normalizedStyle = normalized
      ? normalized.endsWith(';')
        ? normalized
        : `${normalized};`
      : '';
    rootStyle = `${normalizedStyle} --segmented-control-gap: ${gap};`;
  });

  function moveFocus(step: number) {
    if (!items.length) return;
    if (!items.some(entry => !entry.disabled)) return;

    let nextIndex = items.findIndex(entry => entry.value === value);
    if (nextIndex === -1) {
      nextIndex = step > 0 ? -1 : 0;
    }

    for (let i = 0; i < items.length; i += 1) {
      nextIndex = (nextIndex + step + items.length) % items.length;
      const entry = items[nextIndex];
      if (!entry?.disabled) {
        selectValue(entry.value);
        entry.el?.focus();
        break;
      }
    }
  }

  function focusEdge(isFirst: boolean) {
    if (!items.length) return;
    const ordered = isFirst ? items : [...items].reverse();
    for (const entry of ordered) {
      if (!entry.disabled) {
        selectValue(entry.value);
        entry.el?.focus();
        break;
      }
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (disabled) return;
    const { key } = event;
    if (orientation === 'horizontal') {
      if (key === 'ArrowRight') {
        event.preventDefault();
        moveFocus(1);
        return;
      }
      if (key === 'ArrowLeft') {
        event.preventDefault();
        moveFocus(-1);
        return;
      }
    }

    if (orientation === 'vertical') {
      if (key === 'ArrowDown') {
        event.preventDefault();
        moveFocus(1);
        return;
      }
      if (key === 'ArrowUp') {
        event.preventDefault();
        moveFocus(-1);
        return;
      }
    }

    if (key === 'Home') {
      event.preventDefault();
      focusEdge(true);
    }

    if (key === 'End') {
      event.preventDefault();
      focusEdge(false);
    }
  }
</script>

<div
  class={`SegmentedControlRoot ${classNames}`}
  role="radiogroup"
  aria-orientation={orientation}
  aria-disabled={disabled}
  data-orientation={orientation}
  style={rootStyle}
  onkeydown={handleKeydown}
  {...(dataVariant ? { 'data-variant': dataVariant } : {})}
>
  {@render children?.()}
</div>

<style lang="scss">

  .SegmentedControlRoot {
    --segmented-control-padding: 2px;
    --segmented-control-radius: var(--border-radius-button, 10px);
    --segmented-control-border: 1px solid var(--line-base);

    display: inline-flex;
    gap: var(--segmented-control-gap, 2px);
    padding: var(--segmented-control-padding);
    border: var(--segmented-control-border);
    border-radius: var(--segmented-control-radius);
    background-color: var(--bg-base);
    align-items: stretch;
    justify-content: flex-start;
    transition: border-color .2s ease-in-out, box-shadow .2s ease-in-out;

    &[data-orientation='vertical'] {
      flex-direction: column;
    }
  }

  .SegmentedControlRoot:focus-within {
    border-color: var(--line-base);
    box-shadow: 0 0 0 1px var(--line-base);
  }

</style>
