<script lang="ts">
	import '../lib/styles/index.scss';
	import { type Snippet } from "svelte";
	import favicon from '$lib/assets/favicon.svg';
	import { type INavigationItem } from './nav-data';
	import { Header } from '$layout';
	import { themeDefault } from '$lib/components/ThemeProvider/ThemeDefault';

	import { SidebarGroupTitle, SidebarLink, ThemeProvider } from "$lib";

	let { children, data } : { children: Snippet; data: { navigationData: INavigationItem[] } } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ThemeProvider theme={themeDefault}>
	<div class="onest-font-default">
		<Header/>

		<div style="height: 300vh;">
			<div class="container">
				<div class="wrapper">
						<!-- Sidebar -->
						
						<aside class="aside" style="width: 320px; min-width: 320px;">
							<nav class="navigation">
								<ul class="sidebar-menu">

									{#each data.navigationData as navItem (navItem.label + crypto.randomUUID())}
										{#if navItem.type === 'heading'}
											<SidebarGroupTitle>{navItem.label}</SidebarGroupTitle>
										{:else}
											<SidebarLink link={ navItem?.link || '' }>{navItem.label}</SidebarLink>
										{/if}
									{/each}


								</ul>
							</nav>
						</aside>

						<!-- Main content -->
						<main class="workspace">
							{@render children()}
						</main>
					</div>
			</div>
		</div>
	</div>
</ThemeProvider>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.wrapper {
		display: flex;
		gap: .5rem;
	}

	.aside {
		padding: 1rem 0;
	}

	.sidebar-menu {
		list-style: none;
	}

	
</style>