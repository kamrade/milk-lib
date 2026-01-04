import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import TextInputMilk from './TextInputMilk.svelte';

describe('TextInputMilk', () => {
  it('renders with size and variant classes', async () => {
    const screen = render(TextInputMilk, {
      size: 'lg',
      variant: 'underlined',
      placeholder: 'Milk input'
    });

    const inputLocator = screen.getByRole('textbox');
    await expect.element(inputLocator).toHaveClass('TextInput-lg');
    await expect.element(inputLocator).toHaveClass('TextInput-underlined');
  });

  it('passes data-variant and type to TextInput', async () => {
    const screen = render(TextInputMilk, {
      type: 'number',
      placeholder: 'Number input'
    });

    const inputLocator = screen.getByRole('spinbutton');
    await expect.element(inputLocator).toHaveAttribute('data-variant', 'milk');
  });

  it('forwards onInput to TextInput', () => {
    const handleInput = vi.fn();
    const screen = render(TextInputMilk, {
      type: 'number',
      prohibitFraction: true,
      onInput: handleInput
    });

    const input = screen.getByRole('spinbutton').element() as HTMLInputElement;
    input.value = '4.2';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    expect(handleInput).toHaveBeenCalledTimes(1);
  });
});
