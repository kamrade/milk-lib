<script lang="ts">
  import { TextInputMilk, type TextInputInstance } from '$lib';
  import type { ITextInputBlockProps } from './TextInputBlock.types';
  import { CloseCircleFillSystem } from 'svelte-remix';

  let {
    prefix,
    suffix,
    disabled,
    value = $bindable(),
    placeholder,
    variant = 'contained',
    onClear,
    pseudoFocus,
    ...rest
  }: ITextInputBlockProps = $props();

  // Calculate suffix and prefix width
  let prefixEl = $state<HTMLDivElement | null>(null);
  let prefixWidth = $derived(prefixEl?.getBoundingClientRect().width || 0);

  let suffixEl = $state<HTMLDivElement | null>(null);
  let suffixWidth = $derived<number>(suffixEl?.getBoundingClientRect().width || 0);

  // Прокидываем фокус примитива
  let textInputRef: TextInputInstance;
  export const focus = () => textInputRef.focus();

  const handleClear = () => {
    value = "";
    textInputRef.focus();
    onClear?.();
  }

</script>

<div class="TextInputBlock">
  {#if prefix}
    <div class="prefix" bind:this={prefixEl}>
      {@render prefix()}
    </div>
  {/if}
  
  <TextInputMilk
    placeholder={prefix ? (prefixWidth !== 0 ? placeholder : '') : placeholder}
    {variant}
    {disabled}
    bind:this={textInputRef}
    style={`
      ${prefix ? `padding-left: ${prefixWidth + 4}px; padding-right: ${suffixWidth + 4}px;` : ``}
      ${pseudoFocus ? `border-color: var(--border-color-focus)` : ``}
    `}
    bind:value
    {...rest}
  />


  {#if onClear && !disabled && value !== ''}
    <!-- I deliberately excluded this button from tabindex -->
    <button tabindex="-1" type="button" class="clear-value" style={`right: ${suffixWidth + 12}px;`} onmouseup={handleClear}>
      <CloseCircleFillSystem size="1em" />
    </button>
  {/if}

  {#if suffix}
    <div class="suffix" bind:this={suffixEl}>
      {@render suffix()}
    </div>
  {/if}
</div>

<style lang="scss">
  
  .TextInputBlock {
    position: relative;
    display: flex;
    width: 100%;
    
    .prefix, .suffix {
      position: absolute;
      z-index: 1;
      top: 0;
      bottom: 0;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .prefix {
      left: 0;
      padding-left: .75em;
    }
    .suffix {
      right: 0;
      padding-right: .75em;
    }

    .clear-value {
      position: absolute;
      z-index: 1;
      top: 4px;
      bottom: 4px;
      height: calc(100% - 8px);
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: 8px;
      padding: 0 4px;

      &:focus {
        outline: none;
        background-color: #EDEEF0;
        border-color: #D3D5DC;
      }
    }
  }

</style>
