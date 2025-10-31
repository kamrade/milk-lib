<script lang="ts">
  import type { IBadgeProps } from './Badge.types';

  let {
    variant="default",
    shape="straight",
    ref=$bindable(null),
    children,
    href,
    ...restProps
  } : IBadgeProps = $props();

</script>

<svelte:element
  this={href ? 'a' : 'span'}
  {href}
  bind:this={ref}
  class={`Badge Badge-${variant} Badge-${shape}`}
  {...restProps}
>
  {@render children()}
</svelte:element>

<style lang="scss">
  .Badge {
    font-size: 12px;
    line-height: 100%;
    padding: 4px 8px;
    background: var(--bg-base-100);
    display: inline-flex;
    align-items: center;
    border: 1px solid transparent;
    text-decoration: none;
    color: inherit;

    // Variant
    &.Badge-primary {
      background-color: var(--bg-primary-emp-100);
      color: var(--text-base-main);
    }
    &.Badge-secondary {
      background-color: var(--bg-base-emp-100);
      color: var(--text-base-inv);
    }
    &.Badge-outline {
      background-color: white;
      border-color: var(--line-base);
    }
    &.Badge-danger {
      background-color: var(--bg-danger-emp-100);
      color: var(--text-base-inv);
    }
    &.Badge-warning {
      background-color: var(--bg-danger-100);
      color: var(--text-danger-main);
    }

    // Shape
    &.Badge-rounded {
      border-radius: 6px;
    }

    &.Badge-circled {
      border-radius: 20px;
    }

  }
</style>
