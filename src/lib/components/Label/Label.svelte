<script lang="ts">
  import type { ILabelProps } from './Label.types';
  let { forValue, children, ...rest }: ILabelProps = $props();
</script>

<label class="Label" for={forValue} {...rest}>
  {@render children?.()}
</label>

<style lang="scss">
  .Label {
    --font-size: 14px;
    --line-height: 20px;
    --margin-bottom: .25rem;
  }

  .Label {
    display: block;
    font-size: var(--font-size);
    line-height: var(--line-height);
    margin-bottom: var(--margin-bottom);
  }
</style>