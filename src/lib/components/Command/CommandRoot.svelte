<script lang="ts">
  import { setContext } from 'svelte';
  import { writable, get } from 'svelte/store';
  import type { ICommandRootProps, CommandItemEntry, ICommandItems } from './Command.types';

  let { classNames, maxHeight, children }: ICommandRootProps = $props();

  let rootEl: HTMLDivElement;
  const items = writable<CommandItemEntry[]>([]);
  let visibleItems = $derived($items.filter(i => {
    const text = i.el.textContent?.toLowerCase() || '';
    return text.includes($searchQuery);
  }));
  const activeItemId = writable<symbol>();
  const searchQuery = writable('');
  setContext<ICommandItems>('command-items', {
    items,          // список всех зарегистрированных children CommandItem
    activeItemId,   // ID текущего выбранного
    searchQuery     // строка поиска
  });

  function handleKeydown(e: KeyboardEvent) {

    if (!visibleItems.length) return;

    const index = visibleItems.findIndex(i => i.id === get(activeItemId));
    const currentIndex = index === -1 ? 0 : index;

    const findNext = (start: number) => {
      for (let i = start + 1; i < visibleItems.length; i++) {
        if (!visibleItems[i].disabled) return i;
      }
      return currentIndex;
    };

    const findPrev = (start: number) => {
      for (let i = start - 1; i >= 0; i--) {
        if (!visibleItems[i].disabled) return i;
      }
      return currentIndex;
    };

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = findNext(currentIndex);
      activeItemId.set(visibleItems[next].id);

    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = findPrev(currentIndex);
      activeItemId.set(visibleItems[prev].id);
    }

    if (e.key === 'Enter') {
    const id = get(activeItemId);
    const current = get(items).find(item => item.id === id);
    if (current && current.el && !current.disabled) {
      current.el.click(); // Имитируем клик по активному CommandItem
    }
  }
  }
  
</script>

<div
  class={`CommandRoot ${classNames}`}
  bind:this={rootEl}
  tabindex="0"
  onkeydown={handleKeydown}
  role="listbox"
  style={`${maxHeight ? `max-height: ${maxHeight}px; overflow-y: auto;` : ''}`}
>
  {@render children()}
</div>

<style lang="scss">

  .CommandRoot {
    // Root
    --border-color: var(--line-base);
    --border-color-focus: var(--line-control-100);
    --background-color: var(--bg-base);
    --outter-padding: 4px;
    --border-radius: var(--border-radius-panel);
    --font-size: 1em;

    // Item, Group
    --padding-y: 7px;
    --padding-x: 12px;
    --inner-gap: 7px;
    --item-hover: var(--bg-base-100);
    --item-active: var(--bg-base-200);
    --item-border-radius: var(--border-radius-button);
    --opacity-item-disabled: 0.6;

    // Group
    --group-heading-color: var(--text-base-muted);
    --group-padding-y: 0;
    --group-padding-x: 0;
  }

  .CommandRoot {
    padding: var(--outter-padding);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: var(--font-size);
    background: var(--background-color);

    &:focus-visible, &:focus-within {
      // outline: 2px solid var(--border-color-focus);
      // outline-offset: 0px;
      outline: none;
      border-color: var(--line-control-100);
      //border-radius: 0.375rem;
    }
  }

  
</style>
