<script lang="ts">
  import type { IMenuContentProps } from './Menu.types';
  let { children } : IMenuContentProps = $props();
</script>

<div class="MenuContent">
  {@render children()}
</div>

<style>
  .MenuContent {
    border: 1px solid var(--line-base);
    padding: .25rem;
    background-color: var(--bg-base);
    border-radius: 12px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.09);
  }
</style>
