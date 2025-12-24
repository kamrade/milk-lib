import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import AccordionFixture from '../../../tests/AccordionFixture.svelte';

const getWrapperByText = (screen: ReturnType<typeof render>, text: string) => {
  const wrappers = Array.from(
    screen.container.querySelectorAll('.AccordionContentWrapper')
  ) as HTMLElement[];
  const match = wrappers.find((wrapper) => wrapper.textContent?.includes(text));
  if (!match) {
    throw new Error(`Accordion content wrapper not found for "${text}"`);
  }
  return match;
};

const getHeight = (element: HTMLElement) => Number.parseFloat(element.style.height || '0');
const nextFrame = () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

describe('Accordion', () => {
  it('opens the item matching the value prop', async () => {
    const screen = render(AccordionFixture, { value: 'item-2' });
    await nextFrame();

    const firstWrapper = getWrapperByText(screen, 'First content');
    const secondWrapper = getWrapperByText(screen, 'Second content');

    expect(getHeight(firstWrapper)).toBe(0);
    expect(getHeight(secondWrapper)).toBeGreaterThan(0);
  });

  it('toggles content when clicking triggers', async () => {
    const screen = render(AccordionFixture, { value: 'item-1' });
    await nextFrame();

    const firstWrapper = getWrapperByText(screen, 'First content');
    const secondWrapper = getWrapperByText(screen, 'Second content');

    await screen.getByRole('button', { name: 'Second' }).click();
    await nextFrame();

    expect(getHeight(firstWrapper)).toBe(0);
    expect(getHeight(secondWrapper)).toBeGreaterThan(0);

    await screen.getByRole('button', { name: 'Second' }).click();
    await nextFrame();
    expect(getHeight(secondWrapper)).toBe(0);
  });
});
