<script lang="ts">
  import type { Snippet } from "svelte";
  let { children, link }: { children: Snippet; link: string } = $props();
</script>

<li class="SidebarLinkEl">
  <a href={link} class="SidebarLink">
    {@render children()}
  </a>
</li>

<style>

  .SidebarLinkEl {
    list-style: none;
  }

  .SidebarLink {
    font-size: 14px;
    line-height: 20px;
    color: var(--text-base-placeholder);
    text-decoration: none;
    display: block;
    margin-bottom: .5rem;
  }

  .SidebarLink:hover {
    text-decoration: underline;
  }
</style>