<script lang="ts">
  
  import type { CheckboxOption, CheckboxGroupProps } from './CheckboxGroup.types';
  import { Checkbox } from '$lib';

  let {
    legend = 'Choose options',
    options = [] as CheckboxOption[],
    selectedValues = $bindable([] as string[]),
    name
  }: CheckboxGroupProps = $props();

  function handleOptionToggle(value: string) {
    toggleOption(value);
  }

  const isSelected = (value: string) => selectedValues.includes(value);

  function toggleOption(value: string) {
    selectedValues = isSelected(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];
  }
</script>

<fieldset class="checkbox-group">
  {#if legend}
    <legend>{legend}</legend>
  {/if}

  <ul class="checkbox-list">
    {#if options.length === 0}
      <li class="checkbox-placeholder">Нет вариантов для выбора</li>
    {:else}
      {#each options as option (option.value)}
        <li>
          <label class="checkbox-option" data-disabled={option.disabled || undefined}>
            <Checkbox
              id={option.id} name={option.name}
              checked={isSelected(option.value)}
              value={option.value}
              toggleOption={handleOptionToggle}
            />
            <span>
              <span>{option.label}</span>
              {#if option.hint}
                <small>{option.hint}</small>
              {/if}
            </span>
          </label>
        </li>
      {/each}
    {/if}
  </ul>

  <div class="checkbox-selected">
    <strong>Selected:</strong>
    {#if selectedValues.length === 0}
      <span>nothing</span>
    {:else}
      <span>{selectedValues.join(', ')}</span>
    {/if}
  </div>
</fieldset>

<style lang="scss">
  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 16px;
    border: 1px solid var(--line-base, #e2e2e2);
    border-radius: 10px;
    background: var(--bg-base, #fff);
  }

  legend {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .checkbox-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .checkbox-placeholder {
    color: var(--text-base-placeholder, #7c7c7c);
    font-size: 14px;
  }

  .checkbox-option {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 14px;
    line-height: 1.2;
  }

  .checkbox-option[data-disabled="true"] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .checkbox-option small {
    display: block;
    color: var(--text-base-placeholder, #7c7c7c);
    font-size: 12px;
  }

  .checkbox-selected {
    font-size: 13px;
    color: var(--text-base-placeholder, #7c7c7c);
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  .checkbox-selected strong {
    color: var(--text-base-main, #222);
  }
</style>
