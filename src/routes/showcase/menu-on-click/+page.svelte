<script lang="ts">
  import { Menu, MenuContent, MenuItem, MenuItemTitle } from "$lib";
  import { menuLinks } from './data';

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

<h1>Menu</h1>

<div class={`dropdown-toggler ${isHoverMenuVisible ? "dropdown-toggler-hover" : ""}`}
  bind:this={menuWrapperElementHover}
  role="button" tabindex="-1"
>

  <button onclick={mouseEnterHandler} class="dropdown-toggler-text bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition" >
    {label}
  </button>

  <Menu
    bind:menuElement={menuHoverElement}
    appearanceOnHover={false}
    isVisible={isHoverMenuVisible}
    hideMenu={hideHoverMenu}
    parentElement={menuWrapperElementHover}
    minWidth={500}
  >

    <MenuContent>

      {#each menuLinks as menuLink (menuLink.link)}
        {#if typeof menuLink === "string"}
          <MenuItemTitle>{menuLink}</MenuItemTitle>
        {:else}
          <MenuItem onClick={() => alert(menuLink.link)}>
            {menuLink.label}
          </MenuItem>
        {/if}
      {/each}

    </MenuContent>

  </Menu>

</div>

<style>

	.dropdown-toggler {
		display: inline-flex;
		position: relative;
	}

</style>