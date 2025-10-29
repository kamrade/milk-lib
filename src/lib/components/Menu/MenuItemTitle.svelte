<script lang="ts">
  import type { IMenuItemTitleProps } from './Menu.types';
  let { children } : IMenuItemTitleProps = $props();
</script>

<h3 class="MenuItemTitle">
  {@render children()}
</h3>

<style>
  .MenuItemTitle {
    padding: 0.5rem 0.5rem 0 0.5rem;
    margin: 0 0 0.5rem 0;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
    color: #777;
  }
</style>
