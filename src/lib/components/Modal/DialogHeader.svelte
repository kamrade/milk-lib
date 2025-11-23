<script lang="ts">
  import type { IDialogHeaderProps } from "./Modal.types";

  let { children }: IDialogHeaderProps = $props();
</script>

<div class="DialogHeader">
  {@render children()}
</div>

<style lang="scss">

  .DialogHeader {
    padding:  .25rem 1.5rem;
  }

</style>
