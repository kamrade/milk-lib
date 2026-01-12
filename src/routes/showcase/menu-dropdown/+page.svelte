<script lang="ts">
  import { Menu, MenuContent, MenuItem, MenuItemTitle, ButtonMilk } from "$lib";
  import { PageTitle, Divider } from '$layout';

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

<PageTitle>Menu. Show on click</PageTitle>
<Divider/>

<div class={`dropdown-toggler ${isHoverMenuVisible ? "dropdown-toggler-hover" : ""}`}
  bind:this={menuWrapperElementHover}
  role="button" tabindex="-1"
>


  <ButtonMilk onClick={mouseEnterHandler} variant="primary-emphasis" size="lg">{label}</ButtonMilk>
  
  <Menu
    bind:menuElement={menuHoverElement}
    appearanceOnHover={false}
    isVisible={isHoverMenuVisible}
    hideMenu={hideHoverMenu}
    parentElement={menuWrapperElementHover}
    minWidth={500}
    menuGap={0}
    fullWidth
  >

    
      <div class="menu-content">
        This is a Menu content
      </div>
    

  </Menu>

</div>

<style>

	.dropdown-toggler {
		display: flex;
		position: relative;
    padding: 1rem;
    background: var(--bg-base-100);
	}

  .menu-content {
    padding: 2rem 1rem;
    background: var(--bg-base-200);
  }

</style>