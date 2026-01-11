import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import TextArea from './TextArea.svelte';

describe('TextArea', () => {
  it('renders basic attributes and classes', async () => {
    const screen = render(TextArea, {
      placeholder: 'Enter text',
      classNames: 'custom-class',
      invalid: true,
      dataVariant: 'milk',
      rows: 4,
      cols: 10,
      value: 'Hello'
    });

    const inputLocator = screen.getByRole('textbox');
    await expect.element(inputLocator).toBeVisible();
    await expect.element(inputLocator).toHaveAttribute('placeholder', 'Enter text');
    await expect.element(inputLocator).toHaveClass('TextArea');
    await expect.element(inputLocator).toHaveClass('custom-class');
    await expect.element(inputLocator).toHaveClass('invalid');
    await expect.element(inputLocator).toHaveAttribute('data-variant', 'milk');
    await expect.element(inputLocator).toHaveAttribute('rows', '4');
    await expect.element(inputLocator).toHaveAttribute('cols', '10');
    await expect.element(inputLocator).toHaveValue('Hello');
  });

  it('forwards onKeyDown handler', () => {
    const handleKeyDown = vi.fn();
    const screen = render(TextArea, {
      onKeyDown: handleKeyDown
    });

    const textarea = screen.getByRole('textbox').element() as HTMLTextAreaElement;
    const event = new KeyboardEvent('keydown', { key: 'A', bubbles: true, cancelable: true });
    textarea.dispatchEvent(event);

    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });
});
