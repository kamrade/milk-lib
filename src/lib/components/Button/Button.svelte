<script lang="ts">
  import type { IButtonProps } from './Button.types';

  let buttonEl: HTMLButtonElement;

  export const focus = () => buttonEl?.focus();

  let { 
    onClick,
    onMouseEnter,
    onMouseLeave,
    classNames,
    disabled = false, 
    type = 'button', 
    name, 
    id, 
    block, 
    loading,
    children,
    style,
    iconButton,
    dataVariant,
    ...rest
  }: IButtonProps = $props();

</script>

<button
  bind:this={buttonEl}
  onclick={onClick}
  onmouseenter={onMouseEnter}
  onmouseleave={onMouseLeave}
  disabled={disabled || loading} {type} {name} {id} {style} {...rest}
  class={`Button ${iconButton ? 'Button-icon' : ''} ${classNames ? classNames : ''}`}
  class:block={block}
  class:loading={loading}
  {...(dataVariant ? { 'data-variant': dataVariant } : {})}
>
  {@render children?.()}
  {#if loading}
    <span class="loader">
      <span class="loader-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12 2C12.5523 2 13 2.44772 13 3V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V3C11 2.44772 11.4477 2 12 2ZM12 17C12.5523 17 13 17.4477 13 18V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18C11 17.4477 11.4477 17 12 17ZM22 12C22 12.5523 21.5523 13 21 13H18C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11H21C21.5523 11 22 11.4477 22 12ZM7 12C7 12.5523 6.55228 13 6 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H6C6.55228 11 7 11.4477 7 12ZM19.0711 19.0711C18.6805 19.4616 18.0474 19.4616 17.6569 19.0711L15.5355 16.9497C15.145 16.5592 15.145 15.9261 15.5355 15.5355C15.9261 15.145 16.5592 15.145 16.9497 15.5355L19.0711 17.6569C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711ZM8.46447 8.46447C8.07394 8.85499 7.44078 8.85499 7.05025 8.46447L4.92893 6.34315C4.53841 5.95262 4.53841 5.31946 4.92893 4.92893C5.31946 4.53841 5.95262 4.53841 6.34315 4.92893L8.46447 7.05025C8.85499 7.44078 8.85499 8.07394 8.46447 8.46447ZM4.92893 19.0711C4.53841 18.6805 4.53841 18.0474 4.92893 17.6569L7.05025 15.5355C7.44078 15.145 8.07394 15.145 8.46447 15.5355C8.85499 15.9261 8.85499 16.5592 8.46447 16.9497L6.34315 19.0711C5.95262 19.4616 5.31946 19.4616 4.92893 19.0711ZM15.5355 8.46447C15.145 8.07394 15.145 7.44078 15.5355 7.05025L17.6569 4.92893C18.0474 4.53841 18.6805 4.53841 19.0711 4.92893C19.4616 5.31946 19.4616 5.95262 19.0711 6.34315L16.9497 8.46447C16.5592 8.85499 15.9261 8.85499 15.5355 8.46447Z"></path></svg>
      </span>
    </span>
  {/if}
</button>

<style lang="scss">

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .Button {
    --padding-y: 5px;
    --padding-x: 16px;
    --background-color: var(--bg-base-emp-100);
    --hover-background: var(--bg-base-emp-200);
    --active-background: var(--bg-base-emp-300);
    --disabled-background-color: var(--background-color);
    --color: #fff;
    --hover-color: var(--color);
    --active-color: var(--color);
    --disabled-color: var(--color);
    --font-size: 16px;
    --line-height: 1.5;
    --border-radius: 8px;
    --inner-gap: 4px;
    --border-width: 1px;
    --border-color: transparent;
    --hover-border-color: var(--border-color);
    --active-border-color: var(--border-color);
    --disabled-border-color: var(--border-color);
    --focus-color: var(--background-color);
    --focus-shadow: 0 0 0 2px var(--focus-color);
    --disabled-opacity: 0.6;

    &.Button-icon {
      --padding-y: 9px;
      --padding-x: 9px;
    }
  }

  .Button {
    position: relative;
    outline: none;
    display: inline-flex;
    align-items: center;
    align-content: center;
    white-space: nowrap;
    font-family: inherit;
    text-align: center;
    justify-content: center;

    border: var(--border-width) solid var(--border-color);
    padding: var(--padding-y) var(--padding-x);
    background: var(--background-color);
    color: var(--color);
    font-size: var(--font-size);
    line-height: var(--line-height);
    border-radius: var(--border-radius);
    gap: var(--inner-gap);

    transition: all .2s ease-in-out;
    box-sizing: border-box;
    cursor: pointer;

    &:not(:disabled):hover {
      background: var(--hover-background);
      color: var(--hover-color);
      border-color: var(--hover-border-color);
    }

    &:not(:disabled):active {
      background: var(--active-background);
      color: var(--active-color);
      border-color: var(--active-border-color);
    }

    &:not(:active):focus {
      &::after {
        content: '';
        position: absolute;
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
        z-index: 0;
        opacity: .5;
        border-radius: calc(var(--border-radius) + 1px);
        box-shadow: var(--focus-shadow);
      }
    }

    &:disabled, &.loading {
      opacity: var(--disabled-opacity);
      color: var(--disabled-color);
      background-color: var(--disabled-background-color);
      border-color: var(--disabled-border-color);
    }

    &.block {
      width: 100%;
    }

    &.loading {
      .loader {
        display: flex;
      }
    }    

    .loader {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--disabled-background-color);
      display: none;
      border-radius: var(--border-radius);
      justify-content: center;
      align-items: center;

      .loader-wrapper {
        width: 1em;
        height: 1em;
        animation: spin 2.5s linear infinite;

        > svg {
          display: block;
        }
      }
    }

  }

</style>
