<script lang="ts">
  import type { ChangeEventHandler } from "svelte/elements";
  import { TextArea, TextInputMessage, Button, type TextAreaInstance } from "$lib";
  import { Divider, PageTitle, Title, Box } from '$layout';

  let textAreaRef: TextAreaInstance;
  let textAreaValue = $state('');

  let changedValue = $state('');
  let onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    changedValue = (e.target as HTMLTextAreaElement).value;
  };
</script>

<PageTitle>Text Area</PageTitle>
<Divider/>

<Box underline>
  <Title>Bindable Text Area</Title>
  <TextArea rows={4} bind:value={textAreaValue} placeholder="Your text" />
  <TextInputMessage>Current value: {textAreaValue}</TextInputMessage>
</Box>

<Box underline>
  <Title>Text Area invalid</Title>
  <TextArea rows={4} invalid placeholder="Invalid Text Area" />
  <TextInputMessage variant='error'>Error message</TextInputMessage>
</Box>

<Box underline>
  <Title>Text Area disabled and readonly</Title>
  <div style="display: flex; gap: 1rem; justify-content: space-between;">
    <TextArea rows={3} readonly={true} placeholder="Readonly Text Area" />
    <TextArea rows={3} disabled={true} placeholder="Disabled Text Area"/>
  </div>
</Box>

<Box underline>
  <Title>Text Area with onChange</Title>
  <Box underline={false} size='sm'>
    <TextArea rows={4} bind:this={textAreaRef} {onChange} placeholder="Track changes" />
    <TextInputMessage>Value changed to (updates after the field lost focus): {changedValue}</TextInputMessage>
  </Box>
  <Button onClick={() => textAreaRef.focus()}>Focus on TextArea above</Button>
</Box>
