export type NavigationType = 'heading' | 'link';

export type INavigationItem = {
  type: NavigationType;
  label: string;
  link?: string;
}


export const navigationData: INavigationItem[] = [
  { type: 'link', label: 'Home', link: '/' },
  { type: 'heading', label: 'Basic' },
  { type: 'link', label: 'Menu', link: '/showcase/menu-on-click' },
  { type: 'heading', label: 'Button' },
  { type: 'link', label: 'Button Primitive', link: '/showcase/button-primitive' },
  { type: 'link', label: 'Button Milk', link: '/showcase/button-milk' },
]
