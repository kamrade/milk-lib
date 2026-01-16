<script lang="ts">
  import type { IButtonOverlayProps } from "./ButtonOverlay.types";

  let buttonEl: HTMLButtonElement;

  export const focus = () => buttonEl?.focus();

  let {
    onClick,
    onMouseEnter,
    onMouseLeave,
    classNames,
    disabled = false,
    type = "button",
    name,
    id,
    style,
    children,
    ...rest
  }: IButtonOverlayProps = $props();
</script>

<button
  bind:this={buttonEl}
  onclick={onClick}
  onmouseenter={onMouseEnter}
  onmouseleave={onMouseLeave}
  disabled={disabled}
  {type}
  {name}
  {id}
  {style}
  class={`ButtonOverlay ${classNames ? classNames : ""}`}
  {...rest}
>
  {@render children?.()}
</button>

<style lang="scss">
  .ButtonOverlay {
    appearance: none;
    background: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    color: inherit;
    font: inherit;
    line-height: inherit;
    text-align: inherit;
    cursor: pointer;
    display: inline-flex;
    align-items: inherit;
    justify-content: inherit;
  }

  .ButtonOverlay:disabled {
    cursor: not-allowed;
  }

  .ButtonOverlay:focus,
  .ButtonOverlay:focus-visible {
    outline: none;
  }
</style>
