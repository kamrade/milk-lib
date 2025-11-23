<script lang="ts">
  import type { IDialogFooterProps } from "./Modal.types";

  let { children }: IDialogFooterProps = $props();
</script>

<div class="DialogFooter">
  {@render children()}
</div>

<style lang="scss">

  .DialogFooter {
    padding:  .5rem 1.5rem;
    display: flex;
    justify-content: flex-end;
    gap: .5rem;
  }

</style>
