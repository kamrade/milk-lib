<script lang="ts">
	import '../lib/styles/index.scss';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="onest-font-default">
  {@render children?.()}
</div> 