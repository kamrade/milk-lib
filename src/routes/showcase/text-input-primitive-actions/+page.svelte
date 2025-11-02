<script lang="ts">
  import { TextInput, ButtonMilk, type TextInputInstance, TextInputMessage } from '$lib';
  import { Divider, PageTitle, Box } from '$layout';

  let textInputBlock: TextInputInstance;
  let textInputValue = $state('');
</script>

<PageTitle>Text Input Primitive Actions</PageTitle>
<Divider/>

<Box>
  <Box size='sm'>
    <TextInput bind:value={textInputValue} placeholder="Your text" bind:this={textInputBlock} />
    <TextInputMessage>Current value: {textInputValue}</TextInputMessage>
  </Box>
  <div style="display:flex; gap: 1rem;">
    <ButtonMilk size='lg' onClick={() => textInputBlock.focus()}>Focus</ButtonMilk>
    <ButtonMilk variant="base-contained" size='lg' onClick={() => textInputValue = ""}>Clear</ButtonMilk>
  </div>
  
</Box>
