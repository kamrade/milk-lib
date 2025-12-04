<script lang="ts">
  import { SegmentedControl } from '$lib';
  import { Divider, PageTitle } from '$layout';

  let activeSlot = 'today';
  let controlWithDisabledValue = 'apple';
  let vertValue = 'week';
</script>

<PageTitle>Segmented Control Showcase</PageTitle>
<Divider />

<div class="showcase-block">
  <SegmentedControl.Root gap="4px" bind:value={activeSlot}>
    <SegmentedControl.Item value="today">Today</SegmentedControl.Item>
    <SegmentedControl.Item value="week">This Week</SegmentedControl.Item>
    <SegmentedControl.Item value="month">This Month</SegmentedControl.Item>
  </SegmentedControl.Root>
  <p class="showcase-note">Selected option: {activeSlot}</p>
</div>

<Divider />

<div class="showcase-block showcase-block--vertical">
  <SegmentedControl.Root orientation="vertical" defaultValue="week" gap="0" bind:value={vertValue}>
    <SegmentedControl.Item value="life">Lifetime</SegmentedControl.Item>
    <SegmentedControl.Item value="year">Year</SegmentedControl.Item>
    <SegmentedControl.Item value="week">Week</SegmentedControl.Item>
    <SegmentedControl.Item value="day">Day</SegmentedControl.Item>
  </SegmentedControl.Root>
  <p class="showcase-note">Selected option: {vertValue}</p>
</div>


<Divider />

<div class="showcase-block">
  <SegmentedControl.Root gap="3px" bind:value={controlWithDisabledValue}>
    <SegmentedControl.Item value="apple">Apple</SegmentedControl.Item>
    <SegmentedControl.Item value="orange" disabled>Orange (disabled)</SegmentedControl.Item>
    <SegmentedControl.Item value="banana">Banana</SegmentedControl.Item>
  </SegmentedControl.Root>
  <p class="showcase-note">Control is still bound: {controlWithDisabledValue}</p>
</div>

<style>
  .showcase-block {
    display: inline-flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .showcase-block--vertical {
    min-height: 200px;
  }

  .showcase-note {
    margin: 0;
    font-size: 0.85rem;
    color: var(--text-base-muted);
  }

  :global(.SegmentedControlRoot) {
    min-width: 320px;
  }
</style>
