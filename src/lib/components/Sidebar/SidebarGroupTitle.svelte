<script lang="ts">
  import type { Snippet } from "svelte";
  let { children }: { children: Snippet } = $props();
</script>

<li class="SidebarGroupTitle">{@render children()}</li>

<style>
  .SidebarGroupTitle {
    font-size: 12px;
    color: #333;
    font-weight: 500;
    margin-top: 1.5rem;
  }
</style>
