<script lang="ts">
	import { onMount, onDestroy, type Snippet } from 'svelte';
	let ref: Node;
	let portal: Element | null = null;

	interface IPortalProps {
		children: Snippet;
	}

	let { children } : IPortalProps = $props();

	onMount(() => {
		portal = document.createElement('div');
		portal.className = 'portal';
		document.body.appendChild(portal);
		portal.appendChild(ref);
	});

	onDestroy(() => {
		if (portal) {
			document.body.removeChild(portal);
		}
	});
</script>


<div class="portal-clone">
	<div bind:this={ref}>
		{@render children?.()}
	</div>
</div>

<style>
  .portal-clone {
    display: none;
  }
</style>
