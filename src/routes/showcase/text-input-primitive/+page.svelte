<script lang="ts">
  import type { KeyboardEventHandler, ChangeEventHandler } from "svelte/elements";
  import {TextInput, Button, type TextInputInstance, TextInputMessage } from "$lib";
  import { Divider, PageTitle, Title, Box } from '$layout';

  let textInputRef: TextInputInstance;

  // Bindable Text Input
	let textInputValue = $state('');

  // Text Input with onKeyDown
  let lastKeyDownPressed = $state('');
  let onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => lastKeyDownPressed = !e.metaKey && (/^[a-z0-9]$/i.test(e.key)) ? e.key : lastKeyDownPressed;

  // Text Input with onKeyUp
  let lastKeyUpPressed = $state('');
  let onKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => lastKeyUpPressed = (!e.metaKey && (/^[a-z0-9]$/i.test(e.key))) ? e.key : lastKeyUpPressed;

  // Text Input focus/blur
  let isFocused = $state(false);
  let onFocus = () => isFocused = true;
  let onBlur = () => isFocused = false;

  // TextInput onChange
  let changedValue = $state('');
  let onChange: ChangeEventHandler<HTMLInputElement> = (e) => changedValue = (e.target as HTMLInputElement).value ;
</script>

<PageTitle>Text Input Primitive</PageTitle>
<Divider/>

<Box underline>
  <Title>Bindable Text Input</Title>
  <TextInput bind:value={textInputValue} placeholder="Your text" />
  <TextInputMessage>Current value: {textInputValue}</TextInputMessage>
</Box>

<Box underline>
  <Title>Text Input invalid</Title>
  <TextInput invalid placeholder="Invalid Text Input" />
  <TextInputMessage variant='error'>Error message</TextInputMessage>
</Box>

<Box underline>
  <Title>Text Input disabled and readonly</Title>
  <div style="display: flex; gap: 1rem; justify-content: space-between;">
    <TextInput readonly={true} placeholder="Readonly Text Input" />
    <TextInput disabled={true} placeholder="Disabled Text Input"/>
  </div>
</Box>


<Box underline>
  <Title>Text Input with onKeyDown</Title>
  <TextInput {onKeyDown} placeholder="Track KeyDown" />
  <TextInputMessage>Key Down. Pressed (only alphabetical or numbering): {lastKeyDownPressed}</TextInputMessage>
</Box>

<Box underline>
  <Title>Text Input with onKeyUp</Title>
  <TextInput {onKeyUp} placeholder="Track KeyUp" />
  <TextInputMessage>Key Up. Pressed (only alphabetical or numbering): {lastKeyUpPressed}</TextInputMessage>
</Box>

<Box underline>
  <Title>Text Input with onFocus/onBlur</Title>
  <TextInput {onFocus} {onBlur} placeholder="focus/blur" />
  <TextInputMessage>Is focused: {isFocused}</TextInputMessage>
</Box>

<Box underline>
  <Title>Text Input with onChange</Title>
  <Box underline={false} size='sm'>
    <TextInput bind:this={textInputRef} {onChange} placeholder="Track changes" />
    <TextInputMessage>Value changed to (updates after the field lost focus): {changedValue}</TextInputMessage>
  </Box>
  <Button onClick={() => textInputRef.focus()}>Focus on TextInput above</Button>
</Box>