<script lang="ts">
  import type { Snippet } from "svelte";
  let { children, link }: { children: Snippet; link: string } = $props();
</script>

<li>
  <a href={link} class="SidebarLink">
    {@render children()}
  </a>
</li>

<style>
  .SidebarLink {
    font-size: 12px;
    color: #777;
  }

  .SidebarLink:hover {
    text-decoration: underline;
  }
</style>