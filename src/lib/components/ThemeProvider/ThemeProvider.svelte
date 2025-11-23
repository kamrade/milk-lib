<script lang="ts">
  import { browser } from '$app/environment';
	import type { Snippet } from 'svelte';
  import type { ITheme } from './ThemeProvider.types'

  let { children, theme } : { children: Snippet, theme : ITheme } = $props();

  let cssVars = $derived.by(() => {
    return Object.entries(theme)
      .map((([k,v]) => `${k}:${v}`))
      .join(';');
  });

  $effect(() => {
    if (!browser || !theme) return;

    for (const [k, v] of Object.entries(theme)) {
      // ключи должны быть вида `--color-bg`
      document.documentElement.style.setProperty(k, String(v));
    }
  });
</script>

<!-- <div style={cssVars} class="ThemeProvider"> -->
  {@render children()}
<!-- </div> -->

