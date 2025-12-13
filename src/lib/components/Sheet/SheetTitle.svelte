<script lang="ts">
  import type { ISheetTitleProps } from './Sheet.types';
  let { children } : ISheetTitleProps = $props();
</script>

<h2 class="SheetTitle">
  {@render children()}
</h2>

<style lang="scss">
  .SheetTitle {
    font-size: var(--font-size-h2);
    font-weight: 500;
  }
</style>
