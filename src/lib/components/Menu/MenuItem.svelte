<script lang="ts">
  import type { IMenuItemProps } from './Menu.types';
  let { children, onClick } : IMenuItemProps = $props();
</script>

<div class="MenuItem" onclick={() => onClick?.()} role="listbox" tabindex="-1" onkeydown={() => null}>
  {@render children()}
</div>

<style>
  .MenuItem {
    padding: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    display: block;
    width: 100%;
  }

  .MenuItem:hover {
    background: #ccc;
  }
</style>
