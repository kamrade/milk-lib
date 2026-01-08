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
  { type: 'link', label: 'TextInput Number', link: '/showcase/text-input-number' },
  
  { type: 'heading', label: 'Command' },
  { type: 'link', label: 'Command', link: '/showcase/command' },
  { type: 'link', label: 'Command Flat', link: '/showcase/command-flat' },
  { type: 'link', label: 'Command in Loop', link: '/showcase/command-in-loop' },
  { type: 'link', label: 'Command in Menu', link: '/showcase/command-in-menu' },
  { type: 'link', label: 'Command Select', link: '/showcase/command-select' },

  { type: 'heading', label: 'Select' },
  { type: 'link', label: 'Select Base', link: '/showcase/select' },
  { type: 'link', label: 'Select Variants', link: '/showcase/select-variants' },
  { type: 'link', label: 'Select Sizes', link: '/showcase/select-sizes' },
  { type: 'link', label: 'Select Flat', link: '/showcase/select-flat' },
  { type: 'link', label: 'Select Inner Loading', link: '/showcase/select-inner-loading' },
  { type: 'link', label: 'Select Loading', link: '/showcase/select-loading' },

  { type: 'heading', label: 'Dialogs' },
  { type: 'link', label: 'Modal Base', link: '/showcase/modal-base' },
  { type: 'link', label: 'Modal Complex', link: '/showcase/modal-complex' },
  
  { type: 'heading', label: 'Checkbox' },
  { type: 'link', label: 'Checkbox Primitive', link: '/showcase/checkbox-primitive' },
  { type: 'link', label: 'Modal Primitive Form', link: '/showcase/checkbox-primitive-form' },
  { type: 'link', label: 'Checkbox Group', link: '/showcase/checkbox-group' },
  { type: 'link', label: 'Checkbox Group Borderless', link: '/showcase/checkbox-group-borderless' },

  { type: 'heading', label: 'Segmented Control' },
  { type: 'link', label: 'Segmented Control Base', link: '/showcase/segmented-control' },

  { type: 'heading', label: 'Sheet' },
  { type: 'link', label: 'Sheet Base', link: '/showcase/sheet-base' },

  { type: 'heading', label: 'Accordion' },
  { type: 'link', label: 'Accordion Base', link: '/showcase/accordion' },
  { type: 'link', label: 'Accordion Fancy', link: '/showcase/accordion-fancy' },
]
