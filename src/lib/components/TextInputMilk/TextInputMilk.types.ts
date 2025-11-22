import type { ITextInputProps } from '$lib/components/TextInput/TextInput.types';

export type TextInputMilkSizes = 'sm' | 'md' | 'lg';
export type TextInputMilkVariants = 'underlined' | 'contained' | 'text';

export interface ITextInputMilkProps extends ITextInputProps {
  size?: TextInputMilkSizes;
  variant?: TextInputMilkVariants;
}
