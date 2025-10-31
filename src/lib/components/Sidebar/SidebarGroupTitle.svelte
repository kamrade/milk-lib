<script lang="ts">
  import type { Snippet } from "svelte";
  let { children }: { children: Snippet } = $props();
</script>

<li class="SidebarGroupTitle">{@render children()}</li>

<style>
  .SidebarGroupTitle {
    font-size: 14px;
    line-height: 20px;
    color: var(--text-base-main);
    font-weight: 500;
    list-style: none;
    margin-top: 1.5rem;
    margin-bottom: .5rem;
  }
</style>
