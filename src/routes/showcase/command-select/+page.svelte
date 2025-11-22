<!--

  - Когда открыто меню - нужно имитировать border-color: focus у inner TextInput
  + Закрывать / открывать меню по Esc, Enter при TextInput в фокусе
  + Обрабатывать клик по TextInput как триггер открытия/закрытия меню


-->

<script lang="ts">

  import {
    CommandRoot,
    CommandList,
    CommandGroup,
    CommandItem,
    CommandInput,
    Menu,
    TextInputMilk,
    type TextInputInstance
  } from '$lib';
  import { Divider, PageTitle, Title, Box } from '$layout';
  import { groupList, type ISelectItem } from './data';

  let currentCityTitle = $state<string>('');
  let currentCityValue = $state<string>('');

  let menuWrapperElementHover = $state<HTMLDivElement | null>(null);
  let isHoverMenuVisible = $state<boolean>(false);
  let menuHoverElement = $state<HTMLDivElement | null>(null);
  let menu = $state<HTMLDivElement | null>(null);
  let contentHeight = $derived( menu?.getBoundingClientRect().height || 0);
  let textInputBlock: TextInputInstance;

  const showHoverMenu = () => (isHoverMenuVisible = true);
  const hideHoverMenu = () => (isHoverMenuVisible = false);

  const mouseEnterHandler = () => {
    if (!isHoverMenuVisible) {
      showHoverMenu();
    }
  };

  const handleItemClick = (item: ISelectItem) => {
    currentCityTitle = item.title;
    currentCityValue = item.value;
    textInputBlock.focus();
    hideHoverMenu();
  }

  const handleCommandInputKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Tab") {
      textInputBlock.focus();
      hideHoverMenu();
    } else if (e.key === 'Escape') {
      if (isHoverMenuVisible) {
        textInputBlock.focus();
        hideHoverMenu();
      }
    }
  }

  const handleControlKeyDown = (e: KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === "Escape") && !isHoverMenuVisible) {
      showHoverMenu();
    }
  }

  const handleControlClick = (e: MouseEvent) => {
    if (!isHoverMenuVisible) {
      showHoverMenu();
    }
  }


</script>

<PageTitle>Command Select</PageTitle>
<Divider></Divider>

<Box>
  <TextInputMilk variant="contained" size="lg" placeholder="Temp 1" />
</Box>

<div class={`dropdown-toggler ${isHoverMenuVisible ? "dropdown-toggler-hover" : ""}`}
     bind:this={menuWrapperElementHover}
     role="button" tabindex="-1"
>

  <TextInputMilk
      readonly
      onFocus={mouseEnterHandler}
      onKeyDown={handleControlKeyDown}
      onClick={handleControlClick}
      variant="contained"
      size="lg"
      placeholder="Select a city"
      bind:value={currentCityTitle}
      bind:this={textInputBlock}
  />

  <Menu
      bind:menuElement={menuHoverElement}
      appearanceOnHover={false}
      isVisible={isHoverMenuVisible}
      hideMenu={hideHoverMenu}
      parentElement={menuWrapperElementHover}
      minWidth={500}
  >
    <div class="menu" bind:this={menu}>
      <CommandRoot>
        <CommandInput onKeyDown={handleCommandInputKeyDown} autoFocus={true} visible={true} placeholder="Text Input with snippets 1"></CommandInput>
        <CommandList>
          {#each groupList as group (group.heading)}
            <CommandGroup heading={group.heading}>
              {#each group.items as item (item.value)}
                <CommandItem onClick={ () => handleItemClick(item) }>{item.title}</CommandItem>
              {/each}
            </CommandGroup>
          {/each}
        </CommandList>

      </CommandRoot>
    </div>
  </Menu>

</div>

<TextInputMilk variant="contained" size="lg" placeholder="Temp 2" />

<p class="py-3 text-sm">Current Value: {currentCityValue}</p>


<style lang="scss">
  .dropdown-toggler {
    color: var(--color-gray-600);
    transition: color 0.3s ease-in-out;
    padding: 0;
    margin: 0 0 1rem;
    display: flex;
    position: relative;

    &:hover {
      color: var(--color-gray-900);
    }

    &.dropdown-toggler-hover {
      color: var(--color-gray-900);
    }
  }
</style>
