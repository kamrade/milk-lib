<script lang="ts">

	import type { Snippet } from 'svelte';
  import type { ITheme } from './ThemeProvider.types'

  let { children, theme } : { children: Snippet, theme : ITheme } = $props();

  let cssVars = $derived.by(() => {
    return Object.entries(theme)
      .map((([k,v]) => `${k}:${v}`))
      .join(';');
  });

</script>

<div style={cssVars} class="ThemeProvider">
  {@render children()}
</div>

