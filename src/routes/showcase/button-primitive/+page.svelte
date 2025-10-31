<script lang="ts">
  import { CheckboxCircleFillSystem, ArrowRightSLineArrows } from 'svelte-remix';
  import { Button, type ButtonInstance } from '$lib';
  import { PageTitle, Divider } from '$layout';

  /** @type {import('./Button.svelte').default} */
  let buttonRef: ButtonInstance;
</script>

<PageTitle>Button Primitive</PageTitle>
<Divider/>

<div style="display: flex; flex-wrap: wrap; gap: 8px; margin: .5rem 0;">
  <Button loading={true}><CheckboxCircleFillSystem size="1em"/>Loading Button</Button>
  <Button disabled={true}><CheckboxCircleFillSystem size="1em"/>Disabled button</Button>
  <Button onClick={() => buttonRef.focus()}><CheckboxCircleFillSystem size="1em"/>Focus the next button<ArrowRightSLineArrows size="1em"/></Button>
  <Button bind:this={buttonRef}>Focus it</Button>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 8px; margin: .5rem 0;">
  <Button iconButton>
    <CheckboxCircleFillSystem size="1em"/>
  </Button>
</div>
