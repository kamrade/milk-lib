<script lang="ts">
  import {TextInputMilk, TextInputBlock, ButtonMilk, type TextInputInstance } from "$lib";
  import { Divider, PageTitle, Title, Box } from '$layout';
  import { CheckboxCircleFillSystem, ArrowRightSLineArrows } from 'svelte-remix';

  let textInputValue = $state('');
  let textInputBlockValue = $state('');

  let textInputBlock: TextInputInstance;
</script>

<PageTitle>Text Input Bindable</PageTitle>
<Divider/>


<Box>
  <TextInputMilk bind:value={textInputValue} placeholder="This Text Input is binded"/>
  <div style="padding-top: 0.5rem;" >Current value: {textInputValue}</div>
</Box>


<Box>
  <TextInputBlock onClear={() => textInputBlockValue = ""} size='lg' placeholder="Text Input with snippets" bind:value={textInputBlockValue} bind:this={textInputBlock}>
    {#snippet prefix()}
      <CheckboxCircleFillSystem size="1em"/>
    {/snippet}
    {#snippet suffix()}
      <ArrowRightSLineArrows size="1em" />
      <ArrowRightSLineArrows size="1em" />
    {/snippet}
  </TextInputBlock>


  <div style="padding-top: 0.5rem;">Current value: {textInputBlockValue}</div>
</Box>


<ButtonMilk size="lg" variant="base-contained" onClick={() => textInputBlock.focus()}>Focus the TextInput above</ButtonMilk>
