<script lang="ts">
  import {
    CommandRoot,
    CommandInput,
    CommandList,
    CommandGroup,
    CommandItem,
    Menu,
    ButtonMilk
  } from '$lib';
  import { Divider, PageTitle, Title, Box } from '$layout';
  import { groupList } from './data';

  let label = "Выберите город";
	let menuWrapperElementHover: HTMLDivElement;
	let isHoverMenuVisible = false;
	let menuHoverElement: HTMLDivElement;

	const showHoverMenu = () => (isHoverMenuVisible = true);
	const hideHoverMenu = () => (isHoverMenuVisible = false);

	const mouseEnterHandler = () => {
		if (!isHoverMenuVisible) {
			showHoverMenu();
		}
	};


</script>

<PageTitle>Command in menu</PageTitle>
<Divider></Divider>

<div class={`dropdown-toggler ${isHoverMenuVisible ? "dropdown-toggler-hover" : ""}`}
	bind:this={menuWrapperElementHover}
	role="button" tabindex="-1"
>
  	<ButtonMilk size="lg" variant="base-contained" onClick={mouseEnterHandler} classNames="dropdown-toggler-text">
      {label}
    </ButtonMilk>

    	<Menu
        bind:menuElement={menuHoverElement}
        appearanceOnHover={false}
        isVisible={isHoverMenuVisible}
        hideMenu={hideHoverMenu}
        parentElement={menuWrapperElementHover}
        minWidth={500}
      >
        <div class="menu">
          <CommandRoot>  
            <CommandInput autoFocus={true}></CommandInput>
            
            <CommandList>
              {#each groupList as group (group.heading)}
                <CommandGroup heading={group.heading}>
                  {#each group.items as item (item.title)}
                    <CommandItem>{item.title}</CommandItem>
                  {/each}
                </CommandGroup>
              {/each}
            </CommandList>

          </CommandRoot>
        </div>
      </Menu>

</div>


<style lang="scss">
  .dropdown-toggler {
    color: var(--text-base-muted);
    transition: color 0.3s ease-in-out;
    padding: 0;
    margin: 0;
    display: inline-flex;
    position: relative;

    &:hover {
      color: var(--text-base-main);
    }

    &.dropdown-toggler-hover {
      color: var(--text-base-main);
    }
  }
</style>
