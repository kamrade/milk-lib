<script lang="ts">
  import type { IDialogContentProps } from "./Modal.types";

  let { children }: IDialogContentProps = $props();
</script>

<div class="DialogContent">
  {@render children()}
</div>

<style lang="scss">

  .DialogContent {
    padding: .5rem 1.5rem;
  }

</style>
