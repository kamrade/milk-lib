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
  }

</style>
