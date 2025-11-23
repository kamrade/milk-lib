<script lang="ts">
  import type { IDialogTitleProps } from './Modal.types';
  let { children } : IDialogTitleProps = $props();
</script>

<h2 class="DialogTitle">
  {@render children()}
</h2>

<style lang="scss">
  .DialogTitle {
    font-size: var(--font-size-h2);
    margin: 0 0 .5em;
    font-weight: 500;
    margin: 0 0 .25rem;
  }
</style>
