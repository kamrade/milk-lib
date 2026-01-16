<script lang="ts">
  import { Menu, ButtonMilk } from "$lib";
  import { PageTitle, Divider } from '$layout';

	let label = "Hover me";
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

<PageTitle>Menu. Dropdown on hover</PageTitle>
<Divider/>

<div class="wrapper">
  
  
  
  <div class={`dropdown-toggler ${isHoverMenuVisible ? "dropdown-toggler-hover" : ""}`}
    bind:this={menuWrapperElementHover}
    role="button" tabindex="-1"
  >
    <ButtonMilk
      onClick={mouseEnterHandler}
      variant="base-emphasis" size="md">{label}
    </ButtonMilk>
    <Menu
      bind:menuElement={menuHoverElement}
      isVisible={isHoverMenuVisible}
      hideMenu={hideHoverMenu}
      parentElement={menuWrapperElementHover}
      minWidth={500}
      menuGap={0}
      fullWidth
      animate
    >
      <div class="menu-content">
        This is a Menu content
      </div>
    </Menu>
  </div>




</div>

<style>

  .wrapper {
    padding: 2rem;
    background: var(--bg-base-100);
  }

	.dropdown-toggler {
		display: flex;
		position: relative;
    padding: 1rem;
    background: var(--bg-base);
	}

  .menu-content {
    padding: 2rem 1rem;
    background: var(--bg-base);
    box-shadow: 0 12px 20px rgba(0,0,0,0.05);
  }

</style>
