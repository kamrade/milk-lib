export type NavigationType = 'heading' | 'link';

export type INavigationItem = {
  type: NavigationType;
  label: string;
  link?: string;
}


export const navigationData: INavigationItem[] = [
  { type: 'heading', label: 'Basic' },
  { type: 'link', label: 'Menu', link: '/showcase/menu-on-click' },
]
