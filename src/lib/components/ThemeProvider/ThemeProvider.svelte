<script lang="ts">

  import { vars } from './ThemeDefault';
	import type { Snippet } from 'svelte';

  let cssVars = $derived.by(() => {
    return Object.entries(vars)
      .map((([k,v]) => `${k}:${v}`))
      .join(';');
  });

  let { children } : { children: Snippet } = $props();

</script>

<div style={cssVars} class="ThemeProvider">
  {@render children()}
</div>

