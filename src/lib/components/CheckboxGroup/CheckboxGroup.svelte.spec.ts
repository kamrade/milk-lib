import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import type { CheckboxGroupItem } from './CheckboxGroup.types';
import CheckboxGroup from './CheckboxGroup.svelte';

const baseOptions: CheckboxGroupItem[] = [
  { kind: 'header', label: 'Primary', hint: 'Main choices' },
  { label: 'Option A', value: 'alpha' },
  { label: 'Option B', value: 'beta', disabled: true }
];

describe('CheckboxGroup', () => {
  it('renders headers and options', async () => {
    const screen = render(CheckboxGroup, {
      legend: 'Pick options',
      options: baseOptions,
      selectedValues: [],
      name: 'preferences'
    });

    await expect.element(screen.getByText('Pick options')).toBeInTheDocument();
    const header = screen.container.querySelector('.checkbox-section-title');
    expect(header?.textContent).toContain('Primary');

    const checkboxes = screen.container.querySelectorAll('[role="checkbox"]');
    expect(checkboxes).toHaveLength(2);
  });

  it('updates selected values when toggling options', async () => {
    const options: CheckboxGroupItem[] = [
      { kind: 'header', label: 'Main' },
      { label: 'Option A', value: 'alpha' },
      { label: 'Option B', value: 'beta' }
    ];
    const screen = render(CheckboxGroup, {
      legend: 'Pick options',
      options,
      selectedValues: [],
      name: 'preferences'
    });

    const alpha = screen.getByRole('checkbox', { name: 'Option A' });
    const beta = screen.getByRole('checkbox', { name: 'Option B' });

    await alpha.click();
    expect(screen.container.querySelector('.checkbox-selected span')?.textContent).toBe('alpha');

    await beta.click();
    expect(screen.container.querySelector('.checkbox-selected span')?.textContent).toBe('alpha, beta');

    await alpha.click();
    expect(screen.container.querySelector('.checkbox-selected span')?.textContent).toBe('beta');
  });

  it('marks disabled options as non-interactive', async () => {
    const screen = render(CheckboxGroup, {
      legend: 'Pick options',
      options: baseOptions,
      selectedValues: [],
      name: 'preferences'
    });

    const disabledCheckbox = screen.getByRole('checkbox', { name: 'Option B' });
    await expect.element(disabledCheckbox).toBeDisabled();
  });
});
