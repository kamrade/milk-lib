import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import SegmentedControlFixture from '../../../tests/SegmentedControlFixture.svelte';

describe('SegmentedControl', () => {
  it('renders orientation and gap styles', async () => {
    const screen = render(SegmentedControlFixture, { orientation: 'vertical' });

    const group = screen.getByRole('radiogroup');
    await expect.element(group).toHaveAttribute('data-orientation', 'vertical');
    await expect.element(group).toHaveAttribute('aria-orientation', 'vertical');
    await expect.element(group).toHaveAttribute('style', '--segmented-control-gap: 2px;');
  });

  it('updates selection and fires onValueChange', async () => {
    const onValueChange = vi.fn();
    const screen = render(SegmentedControlFixture, { value: 'one', onValueChange });

    const one = screen.getByRole('radio', { name: 'One' });
    const two = screen.getByRole('radio', { name: 'Two' });

    await expect.element(one).toHaveAttribute('aria-checked', 'true');
    await two.click();
    await expect.element(two).toHaveAttribute('aria-checked', 'true');
    await expect.element(one).toHaveAttribute('aria-checked', 'false');
    expect(onValueChange).toHaveBeenCalledTimes(1);
    expect(onValueChange).toHaveBeenCalledWith('two');
  });

  it('marks disabled items and ignores clicks', async () => {
    const onValueChange = vi.fn();
    const screen = render(SegmentedControlFixture, { value: 'one', onValueChange });

    const disabled = screen.getByRole('radio', { name: 'Three' });
    await expect.element(disabled).toBeDisabled();
    await expect.element(screen.getByRole('radio', { name: 'One' }))
      .toHaveAttribute('aria-checked', 'true');
    expect(onValueChange).not.toHaveBeenCalled();
  });
});
