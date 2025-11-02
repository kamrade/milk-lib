<script lang="ts">
  import { type IBoxProps } from './Box.types';
  let { children, underline=false, size='default' } : IBoxProps = $props();
</script>

<div class={`Box`}
  class:Box-underline={underline}
  class:Box-sm={size === 'sm'}
>
  {@render children()}
</div>

<style lang="scss">
  .Box {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    position: relative;
    &.Box-underline {
      border-bottom: 1px solid var(--line-base);
    }
    &.Box-sm {
      padding-bottom: .5rem;
      margin-bottom: .5rem;
    }
  }
</style>