<script lang="ts">
  import { getContext, onMount, onDestroy } from 'svelte';
  import { derived, type Writable } from 'svelte/store';
  import type { ICommandItemProps, ICommandItems } from './Command.types';
  import { addItemSorted } from './Command.utils';

  let { disabled, onClick, children } : ICommandItemProps = $props();
  let el: HTMLElement;
  const itemId = Symbol();
  let textContent = $state('');
  let shouldShow = $state(true);
  const { items, activeItemId, searchQuery }: ICommandItems = getContext('command-items');
  const { commandGroupItemsVisibility }: { commandGroupItemsVisibility: Writable<Record<symbol, boolean>>} = getContext('command-group-visibility');

  // Определяем нужно ли отображать элемент согласно searchQueryshad
  $effect(() => {
    textContent = el?.textContent?.toLowerCase().trim() || '';
    shouldShow = !$searchQuery || textContent.includes($searchQuery);
    // Этот блок передает в группу объект со значениями [id]: visible (для каждого CommandItem)
    commandGroupItemsVisibility.update((recs) => ({ ...recs, [itemId]: shouldShow }));
  });

  onMount(() => {
    // Добавляем элемент в Root state
    items.update(list => addItemSorted(list, { el, id: itemId, disabled: !!disabled }));
  });

  onDestroy(() => {
    // Непонятно нахрена это здесь. Это обновляет Root state зачем-то
    items.update(list => list.filter(item => item.id !== itemId));
  });

  // Вычисляем активный это элемент или нет
  const isActive = derived(activeItemId, $itemId => $itemId === itemId);

  function handleClick(e: MouseEvent) {
    if (disabled) return;
    activeItemId.set(itemId);
    onClick?.(e);
  }

  // Это не тестировалось еще TODO: to test
  $effect(() => {
    if ($isActive) {
      el.scrollIntoView({ block: 'nearest' });
    }
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    let key = (e.key);
    if (key === 'Enter') {
      onClick?.(null);
    }
  }
  
</script>

<div 
  bind:this={el}
  onclick={handleClick}
  onkeydown={handleKeyDown}
  class={`CommandItem ${disabled ? 'disabled' : ''}`} 
  class:active={$isActive}
  class:hidden={!shouldShow}
  role="option" 
  tabindex="-1"
  aria-selected={$isActive}
  data-command-item 
  data-selected
>
  {@render children()}
</div>

<style lang="scss">
  .CommandItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: var(--padding-y) var(--padding-x);
    gap: var(--inner-gap);
    cursor: pointer;
    border-radius: var(--item-border-radius);
    transition: background .3s ease-in-out;

    &.hidden {
      display: none;
    }

    &:focus-visible, &:focus-within {
      outline: none;
    }

    &.active {
      background: var(--item-active);
      &:not(.disabled):hover {
        background: var(--item-active);
      }
    }

    &.disabled {
      opacity: var(--opacity-item-disabled);
      cursor: not-allowed;
    }

    &:not(.disabled):hover {
      background: var(--item-hover)
    }
  }
</style>
