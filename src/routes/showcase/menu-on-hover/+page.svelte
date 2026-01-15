<script lang="ts">
  import { Menu, MenuContent, MenuItem, MenuItemTitle, ButtonMilk } from "$lib";
  import { menuLinks } from "../menu-on-click/data";
  import { PageTitle, Divider } from "$layout";

  let label = "Наведи";
  let menuWrapperElement: HTMLDivElement;
  let isMenuVisible = false;
  let menuElement: HTMLDivElement;

  const showMenu = () => (isMenuVisible = true);
  const hideMenu = () => (isMenuVisible = false);

  const mouseEnterHandler = () => {
    if (!isMenuVisible) {
      showMenu();
    }
  };
</script>

<PageTitle>Menu. Show on hover</PageTitle>
<Divider/>

<div
  class={`dropdown-toggler ${isMenuVisible ? "dropdown-toggler-hover" : ""}`}
  bind:this={menuWrapperElement}
  onmouseenter={mouseEnterHandler}
  onmouseleave={hideMenu}
  role="button"
  tabindex="-1"
>
  <ButtonMilk variant="primary-emphasis" size="lg">{label}</ButtonMilk>

  <Menu
    bind:menuElement={menuElement}
    appearanceOnHover
    isVisible={isMenuVisible}
    hideMenu={hideMenu}
    parentElement={menuWrapperElement}
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
