<script lang="ts">
  import type { ISheetContentProps } from "$lib/components/Sheet/Sheet.types";

  let { children }: ISheetContentProps = $props();
</script>

<div class="SheetContent">
  {@render children()}
</div>

<style lang="scss">

  .SheetContent {
    padding: .5rem 1.5rem;
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
  }

</style>
