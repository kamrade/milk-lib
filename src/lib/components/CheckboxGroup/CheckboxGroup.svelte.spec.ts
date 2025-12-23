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

  it('applies max height and enables scrolling', () => {
    const screen = render(CheckboxGroup, {
      legend: 'Pick options',
      options: baseOptions,
      selectedValues: [],
      name: 'preferences',
      maxHeight: 120
    });

    const list = screen.container.querySelector('.checkbox-list') as HTMLElement;
    expect(list.classList.contains('scrollable')).toBe(true);
    expect(list.style.getPropertyValue('max-height')).toBe('120px');
  });
});
