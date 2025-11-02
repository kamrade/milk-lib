<script lang="ts">
  import { type ITextInputMessageProps } from './TextInput.types';
  let { children, variant='default' } : ITextInputMessageProps = $props();
</script>

<div class={`TextInputMessage ${variant}`}>
  {@render children()}
</div>

<style lang='scss'>
  .TextInputMessage {
    padding-top: .5rem;
    color: var(--text-base-muted);

    &.default {
      color: var(--text-base-muted);
    }

    &.error {
      color: var(--text-danger-main);
    }
  }
</style>