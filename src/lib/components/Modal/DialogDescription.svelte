<script lang="ts">
  import type { IDialogDescriptionProps } from "./Modal.types";
  let { children }: IDialogDescriptionProps = $props();
</script>

<div class="DialogDescription">
  {@render children()}
</div>

<style lang="scss">

  .DialogDescription {
    color: var(--text-base-muted);
    font-size: var(--font-size-md);
  }

</style>
