import SegmentedControlRoot from './SegmentedControl.svelte';
import SegmentedControlItem from './SegmentedControlItem.svelte';

const SegmentedControl = Object.assign(SegmentedControlRoot, {
  Root: SegmentedControlRoot,
  Item: SegmentedControlItem
});

export { SegmentedControl, SegmentedControlRoot, SegmentedControlItem };
export * from './SegmentedControl.types';
