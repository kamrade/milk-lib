<script lang="ts">
  import type {ISheetDescriptionProps} from "$lib/components/Sheet/Sheet.types";

  let { children }: ISheetDescriptionProps = $props();
</script>

<div class="SheetDescription">
  {@render children()}
</div>

<style lang="scss">

  .SheetDescription {
    color: var(--text-base-muted);
  }

</style>
