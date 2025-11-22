<script lang="ts">
  import { TextInput, type TextInputInstance } from '$lib';
  import type { ITextInputMilkProps } from './TextInputMilk.types';

  import "./TextInputMilk.scss";

  let { 
    size = 'sm',
    variant = 'contained',
    value = $bindable(),
    ...rest
  }: ITextInputMilkProps = $props();

  // Прокидываем фокус примитива
  let textInputRef: TextInputInstance;
  export const focus = () => textInputRef.focus();

  let sizeClassName = 
    size === "sm" ? "TextInput-sm" 
    : size === "md" ? "TextInput-md" 
    : size === "lg" ? "TextInput-lg" 
    : "";

  let variantClassname = 
    variant === "text" ? "TextInput-text"
    : variant === "underlined" ? "TextInput-underlined"
    : variant === "contained" ? "TextInput-contained" : ""

  let classNames = `${sizeClassName} ${variantClassname}`;

</script>


<TextInput 
  bind:value
  bind:this={textInputRef}
  {classNames}
  {...rest}
/>