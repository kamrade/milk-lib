import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { createRawSnippet } from 'svelte';
import ButtonMilk from './ButtonMilk.svelte';

const textSnippet = (text: string) =>
  createRawSnippet(() => ({
    render: () => text
  }));

describe('ButtonMilk', () => {
  it('renders default size and variant', async () => {
    const screen = render(ButtonMilk, {
      children: textSnippet('Milk default')
    });

    const button = screen.getByRole('button', { name: 'Milk default' });
    await expect.element(button).toHaveClass('Button-sm');
    await expect.element(button).toHaveClass('Button-primary-emphasis');
    await expect.element(button).toHaveAttribute('data-variant', 'milk');
  });

  it('applies provided size and danger variant classes', async () => {
    const screen = render(ButtonMilk, {
      size: 'lg',
      variant: 'danger-outlined',
      children: textSnippet('Danger action')
    });

    const button = screen.getByRole('button', { name: 'Danger action' });
    await expect.element(button).toHaveClass('Button-lg');
    await expect.element(button).toHaveClass('Button-danger-outlined');
  });

  it('forwards events to the primitive button', async () => {
    const onClick = vi.fn();
    const screen = render(ButtonMilk, {
      onClick,
      children: textSnippet('Trigger action')
    });

    const button = screen.getByRole('button', { name: 'Trigger action' });
    await button.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('updates classes when variant prop changes dynamically', async () => {
    const screen = render(ButtonMilk, {
      variant: 'primary-emphasis',
      children: textSnippet('Dynamic button')
    });

    const button = screen.getByRole('button', { name: 'Dynamic button' });
    await expect.element(button).toHaveClass('Button-primary-emphasis');

    await screen.rerender({ variant: 'danger-contained' });

    await expect.element(button).toHaveClass('Button-danger-contained');
    await expect.element(button).not.toHaveClass('Button-primary-emphasis');
  });
});
