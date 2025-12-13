<script lang="ts">
  import type {ISheetHeaderProps} from "$lib/components/Sheet/Sheet.types";

  let { children }: ISheetHeaderProps = $props();
</script>

<div class="SheetHeader">
  {@render children()}
</div>

<style lang="scss">

  .SheetHeader {
    padding:  1.5rem 1.5rem .5rem;
  }

</style>
