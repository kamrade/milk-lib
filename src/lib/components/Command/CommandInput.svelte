<script lang="ts">
  import { TextInputBlock } from '$lib';
  import type { ITextInputBlockProps } from '$lib/components/TextInputBlock/TextInputBlock.types';
  import { Search2LineSystem } from 'svelte-remix';
  import { getContext } from 'svelte';
  import { type Writable } from 'svelte/store';

  const { searchQuery } = getContext<{ searchQuery: Writable<string> }>('command-items');

  let value = $state('');

  function onInput(e: Event) {
    searchQuery.set(value.toLowerCase().trim());
  }

  interface ICommandInputProps extends ITextInputBlockProps {
    autoFocus?: boolean;
    visible?: boolean;
    placeholder?: string;
  }

  let { autoFocus, visible=true, placeholder, ...rest }: ICommandInputProps = $props();

</script>


<div class={`CommandInput ${visible ? 'visible' : ''}`}>
  <TextInputBlock
    readonly={!visible}
    {autoFocus} 
    size='lg' 
    {placeholder}
    variant="text"
    onKeyUp={onInput} 
    bind:value type="text"
    {...rest}
  >
    {#snippet prefix()}
      <Search2LineSystem size="1em"/>
    {/snippet}
  </TextInputBlock>
</div>


<style lang="scss">
  .CommandInput {
    --border-color: var(--line-base);
    margin-bottom: 0.25rem;
  }

  .CommandInput {
    border-bottom: 1px solid var(--border-color);
    opacity: 0;
    position: absolute;
    z-index: -1;

    &.visible {
      opacity: 1;
      position: relative;
      z-index: 0;
    }
  }
</style>
