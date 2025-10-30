<script lang="ts">
  import { Button, type ButtonInstance } from '$lib';
  import type { IButtonMilkProps } from './ButtonMilk.types';
  import "./ButtonMilk.scss";

  const { 
    size = 'sm',
    variant = 'primary-emphasis',
    children,
    ...rest
  }: IButtonMilkProps = $props();

  // Прокидываем фокус примитива
  let buttonRef: ButtonInstance;
  export const focus = () => buttonRef.focus();

  let sizeClassName = 
    size === "sm" ? "Button-sm" 
    : size === "md" ? "Button-md" 
    : size === "lg" ? "Button-lg" 
    : "";

  let variantClassname = 
    variant === "primary-emphasis" ? "Button-primary-emphasis" 
    : variant === "primary-outlined" ? "Button-primary-outlined"
    : variant === "primary-contained" ? "Button-primary-contained"
    : variant === "base-contained" ? "Button-base-contained"
    : variant === "base-outlined" ? "Button-base-outlined"
    : variant === "base-emphasis" ? "Button-base-emphasis" : ""

  let classNames = `${sizeClassName} ${variantClassname}`;

</script>

<Button
  bind:this={buttonRef}
  {classNames}
  {...rest}
>
  {@render children?.()}
</Button>

<style lang="scss">
  
</style>