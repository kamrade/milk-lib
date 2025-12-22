<script lang="ts">
  import { SegmentedControl } from '$lib';

  type SegmentedControlFixtureProps = {
    value?: string | null;
    orientation?: 'horizontal' | 'vertical';
    disabled?: boolean;
    onValueChange?: (value: string) => void;
  };

  let {
    value = $bindable(null),
    orientation = 'horizontal',
    disabled = false,
    onValueChange
  }: SegmentedControlFixtureProps = $props();
</script>

<SegmentedControl.Root
  bind:value
  {orientation}
  {disabled}
  onValueChange={onValueChange}
>
  <SegmentedControl.Item value="one">One</SegmentedControl.Item>
  <SegmentedControl.Item value="two">Two</SegmentedControl.Item>
  <SegmentedControl.Item value="three" disabled>Three</SegmentedControl.Item>
</SegmentedControl.Root>
