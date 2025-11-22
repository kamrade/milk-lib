import type { CommandItemEntry } from './Command.types'

export function sortItemsByDOMPosition(list: { el: HTMLElement; id: symbol }[]) {
  return list.slice().sort((a, b) =>
    a.el.compareDocumentPosition(b.el) & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : 1
  );
}

export function addItemSorted(
  list: CommandItemEntry[],
  entry: CommandItemEntry
): CommandItemEntry[] {
  return sortItemsByDOMPosition([...list, entry]);
}