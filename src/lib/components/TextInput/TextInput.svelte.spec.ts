import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import TextInput from './TextInput.svelte';

describe('TextInput', () => {
  it('renders basic attributes and classes', async () => {
    const screen = render(TextInput, {
      placeholder: 'Enter text',
      classNames: 'custom-class',
      invalid: true,
      dataVariant: 'milk'
    });

    const inputLocator = screen.getByRole('textbox');
    await expect.element(inputLocator).toBeVisible();
    await expect.element(inputLocator).toHaveAttribute('placeholder', 'Enter text');
    await expect.element(inputLocator).toHaveClass('TextInput');
    await expect.element(inputLocator).toHaveClass('custom-class');
    await expect.element(inputLocator).toHaveClass('invalid');
    await expect.element(inputLocator).toHaveAttribute('data-variant', 'milk');
  });

  it('sanitizes number input when prohibit flags are enabled', () => {
    const screen = render(TextInput, {
      type: 'number',
      prohibitFraction: true,
      prohibitNegative: true
    });

    const input = screen.getByRole('spinbutton').element() as HTMLInputElement;
    input.value = '-12.34';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    expect(input.value).toBe('12');
  });

  it('forwards onKeyDown and respects prohibited keys', () => {
    const handleKeyDown = vi.fn((event: KeyboardEvent) => event.defaultPrevented);
    const screen = render(TextInput, {
      type: 'number',
      prohibitFraction: true,
      onKeyDown: handleKeyDown
    });

    const input = screen.getByRole('spinbutton').element() as HTMLInputElement;
    const event = new KeyboardEvent('keydown', { key: '.', bubbles: true, cancelable: true });
    input.dispatchEvent(event);

    expect(handleKeyDown).toHaveBeenCalledTimes(1);
    expect(handleKeyDown).toHaveReturnedWith(true);
  });
});
