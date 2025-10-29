<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<script lang="ts">
	import { Menu, MenuContent, MenuItem, MenuItemTitle } from '$lib';
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

	<button onclick={mouseEnterHandler} class="dropdown-toggler-text">
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
