<script lang="ts">
  import { onMount } from 'svelte';
  import type { ITextInputProps } from './TextInput.types';

  let {
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
    onChange,
    onClick,
    placeholder,
    type = 'text',
    disabled = false,
    readonly = false,
    name,
    id,
    value = $bindable(),
    invalid,
    style,
    classNames='',
    autoFocus,
    ariaHasPopup,
    ariaExpanded,
    ariaControls,
    ...rest
  }: ITextInputProps = $props();

  let inputEl: HTMLInputElement;
  export const focus = () => inputEl?.focus();

  onMount(() => {
    if (autoFocus && inputEl) {
      // Wrapped to setTimeout to correctly autoFocus in modal and conditional rendering
      setTimeout(() => {
        inputEl.focus();
      });

    }
  })

</script>

<input 
  bind:this={inputEl}
  bind:value
  class={`TextInput ${invalid ? 'invalid' : ''} ${classNames}`}
  onfocus={onFocus}
  onblur={onBlur} 
  onkeydown={onKeyDown} 
  onkeyup={onKeyUp}
  onchange={onChange}
  onclick={onClick}
  {type} 
  {placeholder} 
  {disabled} 
  {readonly}
  {name}
  {id}
  {style}
  aria-haspopup={ariaHasPopup}
  aria-expanded={ariaExpanded}
  aria-controls={ariaControls}
  {...rest}
/>

<style lang="scss">
  
  .TextInput {
    --transition: border-color .25s ease-in-out;

    // Base size
    --padding-y: 7px;
    --padding-x: 12px;
    --font-size: 16px;
    --line-height: 1.5;
    --border-radius: 8px;

    --border-style: solid;
    --border-width: var(--stroke-base); //+
    --border-top-width: var(--border-width); //-
    --border-bottom-width: var(--border-width); //-
    --border-left-width: var(--border-width); //-
    --border-right-width: var(--border-width); //-


    // Base colors
    --focus-shadow: var(--line-base-emp); //+
    --text-color: var(--text-base-main); //+
    --background-color: var(--bg-base);  //+
    --border-color: var(--line-control-100); //+
    --border-color-focus: var(--line-base-emp); //+
    
    // Disabled
    --background-disabled: var(--bg-base-100); //+
    --border-color-disabled: var(--line-base); //+
    --opacity-disabled: 0.8;

    --border-style-disabled: var(--border-style);
    --border-width-disabled: var(--border-width);
    --border-top-width-disabled: var(--border-width-disabled);
    --border-bottom-width-disabled: var(--border-width-disabled);
    --border-left-width-disabled: var(--border-width-disabled);
    --border-right-width-disabled: var(--border-width-disabled);

    // Readonly
    --background-readonly: var(--background-color);
    --border-color-readonly: var(--border-color);
    --opacity-readonly: 1;

    --border-style-readonly: var(--border-style);
    --border-width-readonly: var(--border-width);
    --border-top-width-readonly: var(--border-width);
    --border-bottom-width-readonly: var(--border-width);
    --border-left-width-readonly: var(--border-width);
    --border-right-width-readonly: var(--border-width);

    // Invalid
    --border-color-invalid: #EA6D60;
    --background-invalid: var(--background-disabled);
    --border-style-invalid: var(--border-style);
    --border-width-invalid: var(--border-width);
    --border-top-width-invalid: var(--border-width);
    --border-bottom-width-invalid: var(--border-width);
    --border-left-width-invalid: var(--border-width);
    --border-right-width-invalid: var(--border-width);
  }

  .TextInput {
    box-sizing: border-box;
    background: var(--background-color);
    border-radius: var(--border-radius);
    font-size: var(--font-size);
    line-height: var(--line-height);
    padding: var(--padding-y) var(--padding-x);
    width: 100%;
    display: block;
    position: relative;
    border: var(--border-width) var(--border-style) var(--border-color);
    border-top-width: var(--border-top-width);
    border-bottom-width: var(--border-bottom-width);
    border-right-width: var(--border-right-width);
    border-left-width: var(--border-left-width);
    transition: var(--transition);

    &:focus {
      border-color: var(--border-color-focus);
      outline: none;
      box-shadow: none;
      &:read-only {
        border-color: var(--border-color-focus);
      }
    }

    &::placeholder {
      color: var(--text-base-placeholder);
    }

    &:read-only {
      background: var(--background-readonly);
      opacity: var(--opacity-readonly);
      border: var(--border-width-readonly) var(--border-style-readonly) var(--border-color-readonly);
      border-top-width: var(--border-top-width-readonly);
      border-bottom-width: var(--border-bottom-width-readonly);
      border-right-width: var(--border-right-width-readonly);
      border-left-width: var(--border-left-width-readonly);
    }

    &:disabled {
      background: var(--background-disabled);
      opacity: var(--opacity-disabled);
      border: var(--border-width-disabled) var(--border-style-disabled) var(--border-color-disabled);
      border-top-width: var(--border-top-width-disabled);
      border-bottom-width: var(--border-bottom-width-disabled);
      border-right-width: var(--border-right-width-disabled);
      border-left-width: var(--border-left-width-disabled);
    }

    &.invalid {
      border-color: var(--border-color-invalid);
      border: var(--border-width-invalid) var(--border-style-invalid) var(--border-color-invalid);
      border-top-width: var(--border-top-width-invalid);
      border-bottom-width: var(--border-bottom-width-invalid);
      border-right-width: var(--border-right-width-invalid);
      border-left-width: var(--border-left-width-invalid);
    }
  }

</style>
