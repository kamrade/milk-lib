import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { createRawSnippet } from 'svelte';
import Button from './Button.svelte';

const textSnippet = (text: string) =>
  createRawSnippet(() => ({
    render: () => text
  }));

describe('Button', () => {
  it('renders provided children and triggers click handler', async () => {
    const handleClick = vi.fn();
    const screen = render(Button, {
      onClick: handleClick,
      children: textSnippet('Primary action')
    });

    const button = screen.getByRole('button', { name: 'Primary action' });
    await expect.element(button).toBeVisible();

    await button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('marks the button as loading and disables interactions', async () => {
    const screen = render(Button, {
      loading: true,
      children: textSnippet('Loading...')
    });

    const button = screen.getByRole('button', { name: 'Loading...' });
    await expect.element(button).toBeDisabled();
    await expect.element(button).toHaveClass(/loading/);
  });

  it('applies block class, custom class and data attribute', async () => {
    const screen = render(Button, {
      block: true,
      dataVariant: 'milk',
      classNames: 'custom-btn',
      children: textSnippet('Block button')
    });

    const button = screen.getByRole('button', { name: 'Block button' });
    await expect.element(button).toHaveClass('block');
    await expect.element(button).toHaveClass(/custom-btn/);
    await expect.element(button).toHaveAttribute('data-variant', 'milk');
  });
});
