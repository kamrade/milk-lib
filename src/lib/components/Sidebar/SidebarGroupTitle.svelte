<script lang="ts">
  import type { Snippet } from "svelte";
  let { children }: { children: Snippet } = $props();
</script>

<li class="SidebarGroupTitle">{@render children()}</li>

<style>
  .SidebarGroupTitle {
    font-size: 14px;
    color: var(--text-base-main);
    font-weight: 500;
    margin-top: 1.5rem;
    list-style: none;
  }
</style>
