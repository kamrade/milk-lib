<script lang="ts">
  import type { ICheckboxProps } from './Checkbox.types';
  let { 
    checked = $bindable(), 
    disabled, 
    id, 
    name, 
    value, 
    required, 
    ariaLabel,
    toggleOption
  }: ICheckboxProps = $props();

  const toggle = () => {
    checked = !checked;
    if (value) {
      toggleOption?.(value);
    }
  };

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggle();
    }
  }
</script>


<button
  type="button"
  class="checkbox-button"
  role="checkbox"
  aria-label={ariaLabel}
  aria-checked={checked}
  {disabled}
  {id}
  {name}
  {value}
  tabindex="0"
  onclick={toggle}
  onkeydown={handleKeydown}
>

  <span class={`checkbox-icon ${checked ? 'visible1' : ''}`}>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.9141 7.41406L9 22.3281L0.585938 13.9141L3.41406 11.0859L9 16.6719L21.0859 4.58594L23.9141 7.41406Z" fill="currentColor"/>
    </svg>
  </span>

</button>

{#if name}
  <!-- скрытый input для участия в формах -->
  <input type="hidden" name={name} value={value || ''} {disabled} {checked} />
{/if}

<style lang="scss">

  .checkbox-button {
    --size: 16px;
    --border-width: 2px;
    --border-radius: 3px;

    --background-color: white;
    --border-color: var(--line-base);

    --background-color-checked: var(--bg-primary-emp-100);
    --color-checked: var(--icon-base-main);
    --border-color-checked: var(--background-color-checked);

    --color-outline-focused: var(--bg-primary-emp-100);

    --opacity-disabled: 0.6;

  }

  .checkbox-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--size);
    height: var(--size);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--background-color);
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease-in-out;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .checkbox-button[aria-checked="true"],
  .checkbox-button[aria-checked="mixed"] {
    background: var(--background-color-checked);
    color: var(--color-checked);
    border-color: var(--border-color-checked);
  }

  .checkbox-icon {
    line-height: 0;
    pointer-events: none;
    opacity: 0;
    box-sizing: border-box;

    &.visible1 {
      opacity: 1;
    }
  }

  .checkbox-button:focus-visible {
    outline: 2px solid var(--color-outline-focused);
    outline-offset: 1px;
  }

  .checkbox-button[disabled] {
    opacity: var(--opacity-disabled);
    pointer-events: none;
  }
</style>