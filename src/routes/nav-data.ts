export type NavigationType = 'heading' | 'link';

export type INavigationItem = {
  type: NavigationType;
  label: string;
  link?: string;
}


export const navigationData: INavigationItem[] = [
  { type: 'link', label: 'Home', link: '/' },
  { type: 'heading', label: 'Badge' },
  { type: 'link', label: 'Badge', link: '/showcase/badge' },
  { type: 'heading', label: 'Basic' },
  { type: 'link', label: 'Menu', link: '/showcase/menu-on-click' },
  { type: 'heading', label: 'Button' },
  { type: 'link', label: 'Button Primitive', link: '/showcase/button-primitive' },
  { type: 'link', label: 'Button Milk', link: '/showcase/button-milk' },
  { type: 'heading', label: 'TextInput' },
  { type: 'link', label: 'TextInput Primitive', link: '/showcase/text-input-primitive' },
  { type: 'link', label: 'TextInput Primitive Actions', link: '/showcase/text-input-primitive-actions' },
  { type: 'link', label: 'TextInput with label', link: '/showcase/text-input-with-label' },
  { type: 'link', label: 'TextInput autofocus', link: '/showcase/text-input-autofocus' },
  { type: 'link', label: 'TextInput Milk', link: '/showcase/text-input-milk' },
  { type: 'link', label: 'TextInput Milk Autofocus', link: '/showcase/text-input-milk-autofocus' },
  { type: 'link', label: 'TextInput Block', link: '/showcase/text-input-block' },
  { type: 'link', label: 'TextInput Block Autofocus', link: '/showcase/text-input-block-autofocus' },
  { type: 'link', label: 'TextInput Bindable', link: '/showcase/text-input-bindable' },
]
