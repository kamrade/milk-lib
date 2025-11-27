<!--
  Select
-->

<script lang="ts">

  import type {ISelectGroupData, ISelectItem, ISelectProps} from './Select.types';
  import { ArrowDownSLineArrows } from 'svelte-remix';

  import {
    CommandRoot,
    CommandList,
    CommandGroup,
    CommandItem,
    CommandInput,
    Menu,
    TextInputBlock,
    type TextInputInstance,
    IconLoading
  } from '$lib';

  let {
    options,
    value = $bindable(),
    placeholder,
    disabled,
    fullWidthMenu,
    minWidthMenu,
    menuGap,
    menuMaxHeight,
    searchable=true
  }: ISelectProps = $props();

  const menuId = `select-menu-${crypto.randomUUID()}`;

  let currentTitle = $derived<string>(value?.title || '');
  // Нужен для того, чтоб позиционировать Menu относительно parent элемента
  let menuParentElement = $state<HTMLDivElement | null>(null);
  let isMenuVisible = $state<boolean>(false);

  let textInputBlock: TextInputInstance;
  let flatSelect = $state<boolean>(false);

  // С помощью этой функции я различаю разные типы options
  const isGroupArray = (options: ISelectItem[] | ISelectGroupData[]) =>
    options.length > 0 && "heading" in options[0];

  // Определяем тип options - Promise или значение
  let innerGroupOptions = $state<ISelectGroupData[] | null>(null);
  let innerOptions = $state<ISelectItem[] | null>(null);
  let isLoadingOptions = $state(false);
  let loadError = $state<unknown>(null);

  const normalizeOptions = (opt: ISelectGroupData[] | ISelectItem[]) => {
    if (isGroupArray(opt)) {
      innerGroupOptions = opt as ISelectGroupData[];
      innerOptions = null;
      flatSelect = false;
    } else {
      innerOptions = opt as ISelectItem[];
      innerGroupOptions = null;
      flatSelect = true;
    }
    isLoadingOptions = false;
  }

  let requestId = 0;
  $effect(() => {
    const currentId = ++requestId;
    isLoadingOptions = true;


    (async () => {
      try {
        const resolved = await options as ISelectItem[] | ISelectGroupData[];
        // если за это время options сменился — выходим
        if (currentId !== requestId) return;
        normalizeOptions(resolved);
      } catch (err) {
        if (currentId !== requestId) return;
        loadError = err;
        innerOptions = null;
        innerGroupOptions = null;
      } finally {
        if (currentId === requestId) isLoadingOptions = false;
      }
    })();
  });


  const showMenu = () => {
    isMenuVisible = true;
  }
  const hideMenu = () => {
    isMenuVisible = false;
  }

  const focusHandler = () => {
    if (!isMenuVisible) {
      showMenu();
    }
  };

  const updateValue = (newValue: ISelectItem) => {
    value = newValue;
  }

  const handleItemClick = (item: ISelectItem) => {
    updateValue({
      title: item.title,
      value: item.value
    });
    textInputBlock.focus();
    setTimeout(() => {
      hideMenu();
    }, 50);
    
  }

  const handleCommandInputKeyDown = (e: KeyboardEvent) => {
    if (disabled || isLoadingOptions) return;

    if (e.key === "Tab") {
      textInputBlock.focus();
      hideMenu();
    } else if (e.key === 'Escape') {
      if (isMenuVisible) {
        textInputBlock.focus();
        hideMenu();
      }
    }
  }

  const handleControlKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
      case 'ArrowDown':
      case 'ArrowUp': {
        if (!isMenuVisible) {
          showMenu();
          e.preventDefault();
        }
        return;
      }
    }
  }

  const handleControlClick = () => {
    if (!isMenuVisible) {
      showMenu();
    }
  }

  const handleClear = () => {
    hideMenu();
    value = null;
  }

</script>

<div class={`dropdown-toggler ${isMenuVisible ? "dropdown-toggler-hover" : ""}`}
   bind:this={menuParentElement}
>

  <TextInputBlock
    disabled={disabled || isLoadingOptions}
    readonly
    onFocus={focusHandler}
    onKeyDown={handleControlKeyDown}
    onClear={handleClear}
    pseudoFocus={isMenuVisible}
    onClick={handleControlClick}
    variant="contained"
    size="lg"
    placeholder={placeholder}
    bind:value={currentTitle}
    bind:this={textInputBlock}

    ariaHasPopup="listbox"
    ariaExpanded={isMenuVisible}
    ariaControls={menuId}
  >
    {#snippet suffix()}
      <div class="suffix-wrapper">
        {#if isLoadingOptions}
          <IconLoading/>
        {/if}
        <ArrowDownSLineArrows size="1em" onclick={(e: MouseEvent) => { e.stopPropagation(); handleControlClick(); }} />
      </div>
    {/snippet}
  </TextInputBlock>

  <Menu
    id={menuId}
    parentElement={menuParentElement}
    appearanceOnHover={false}
    isVisible={isMenuVisible}
    hideMenu={hideMenu}
    minWidth={minWidthMenu}
    fullWidth={fullWidthMenu}
    {menuGap}
    maxHeight={menuMaxHeight}
  >
    <div class="menu" role="listbox">
      <CommandRoot maxHeight={menuMaxHeight} >
        <CommandInput onKeyDown={handleCommandInputKeyDown} autoFocus={true} visible={searchable} placeholder={placeholder} ></CommandInput>
        <CommandList>
          {#if isLoadingOptions}
            <div class="px-3 py-2">Loading...</div>
          {:else if loadError}
            <div class="px-3 py-2 text-danger">Load options error</div>
          {:else}

            {#if flatSelect}
              {#if innerOptions}
                <CommandGroup>
                  {#each innerOptions as option (option.value)}
                    <CommandItem onClick={ () => handleItemClick(option) }>{option.title}</CommandItem>
                  {/each}
                </CommandGroup>
              {/if}
            {:else}
              {#if innerGroupOptions}
                {#each innerGroupOptions as option (option.heading)}
                  <CommandGroup heading={option.heading}>
                    {#each option.items as item (item.value)}
                      <CommandItem onClick={ () => handleItemClick(item) }>{item.title}</CommandItem>
                    {/each}
                  </CommandGroup>
                {/each}
              {/if}
            {/if}

          {/if}
        </CommandList>

      </CommandRoot>
    </div>
  </Menu>

</div>


<style lang="scss">
  .dropdown-toggler {
    color: var(--text-base-placeholder);
    transition: color 0.3s ease-in-out;
    padding: 0;
    margin: 0 0 1rem;
    display: flex;
    width: 100%;
    position: relative;

    &:hover {
      color: var(--text-base-main);
    }

    &.dropdown-toggler-hover {
      color: var(--text-base-main);
    }
  }

  .suffix-wrapper {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
</style>
