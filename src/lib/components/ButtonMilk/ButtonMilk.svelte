<script lang="ts">
  import { Button, type ButtonInstance } from '$lib';
  import type { IButtonMilkProps } from './ButtonMilk.types';
  import "./ButtonMilk.scss";

  let { 
    size = 'sm',
    variant = 'primary-emphasis',
    children,
    ...rest
  }: IButtonMilkProps = $props();

  // Прокидываем фокус примитива
  let buttonRef: ButtonInstance;
  export const focus = () => buttonRef.focus();

  const sizeClassName = $derived(
    size === "sm" ? "Button-sm" 
    : size === "md" ? "Button-md" 
    : size === "lg" ? "Button-lg" 
    : ""
  );

  const variantClassname = $derived(
    variant === "primary-emphasis" ? "Button-primary-emphasis" 
    : variant === "primary-outlined" ? "Button-primary-outlined"
    : variant === "primary-contained" ? "Button-primary-contained"
    : variant === "base-contained" ? "Button-base-contained"
    : variant === "base-outlined" ? "Button-base-outlined"
    : variant === "base-emphasis" ? "Button-base-emphasis"
    : variant === "base-text" ? "Button-base-text"
    : variant === "danger-contained" ? "Button-danger-contained"
    : variant === "danger-outlined" ? "Button-danger-outlined"
    : variant === "danger-emphasis" ? "Button-danger-emphasis" : ""
  );

  const classNames = $derived(`${sizeClassName} ${variantClassname}`);

</script>

<Button
  bind:this={buttonRef}
  dataVariant="milk"
  {classNames}
  
  {...rest}
>
  {@render children?.()}
</Button>

<style lang="scss">
  
</style>
