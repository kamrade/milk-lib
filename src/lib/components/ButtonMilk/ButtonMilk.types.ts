import type { IButtonProps } from '$lib/components/Button/Button.types';

export type ButtonMilkSizes = 'sm' | 'md' | 'lg';
export type ButtonMilkVariants = 
  'primary-emphasis' | 'primary-outlined' | 'primary-contained' | 
  'base-contained' | 'base-outlined' | 'base-emphasis' |
  'danger-contained' | 'danger-outlined' | 'danger-emphasis';

export interface IButtonMilkProps extends IButtonProps {
  size?: ButtonMilkSizes;
  variant?: ButtonMilkVariants;
}
