<script lang="ts">
  import type { ICommandListProps } from './Command.types';
  let { children } : ICommandListProps = $props();
</script>

<div class="CommandList" role="listbox">
  {@render children()}
</div>

<style lang="scss">
  .CommandList {
    display: flex;
    flex-direction: column;
  }
</style>