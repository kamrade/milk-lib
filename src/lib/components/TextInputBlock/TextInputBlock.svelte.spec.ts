import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { createRawSnippet } from 'svelte';
import TextInputBlock from './TextInputBlock.svelte';

const textSnippet = (text: string) =>
  createRawSnippet(() => ({
    render: () => `<span>${text}</span>`
  }));

describe('TextInputBlock', () => {
  it('renders prefix and suffix snippets', async () => {
    const screen = render(TextInputBlock, {
      prefix: textSnippet('Prefix'),
      suffix: textSnippet('Suffix'),
      placeholder: 'With snippets'
    });

    await expect.element(screen.getByText('Prefix')).toBeVisible();
    await expect.element(screen.getByText('Suffix')).toBeVisible();
  });

  it('clears value and calls onClear', async () => {
    const handleClear = vi.fn();
    const screen = render(TextInputBlock, {
      value: '123',
      onClear: handleClear,
      placeholder: 'Clearable'
    });

    const button = screen.container.querySelector('button.clear-value') as HTMLButtonElement;
    expect(button).toBeTruthy();
    button.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    await Promise.resolve();

    const input = screen.getByRole('textbox').element() as HTMLInputElement;
    expect(input.value).toBe('');
    expect(handleClear).toHaveBeenCalledTimes(1);
  });

});
