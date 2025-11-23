<!--

  Tech wrapper for Modal Window with Backdrop, Close Button and handlers

-->

<script lang="ts">

  import Portal from '$lib/components/Portal/Portal.svelte';
  import { CloseFillSystem } from 'svelte-remix';
  import type { IModalProps } from './Modal.types';

  let { isVisible, hideModal, showCloseButton, hideOnEscape, blackout, closeOnBackdrop, children }: IModalProps= $props();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && hideOnEscape && isVisible) {
      hideModal?.();
    }
  };

  $effect(() => {
    if (document) {
      if (isVisible) {
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = 'hidden';
      } else {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = 'auto';
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = 'auto';
    }
  })

  const backdropClick = (e: MouseEvent) => {
    if (closeOnBackdrop && (e.target as HTMLElement).classList.contains("Modal-content")) {
      hideModal?.();
    }
  }

</script>


<Portal>
  <div class="Modal">
    <div class={`Modal-backdrop ${blackout ? "Modal-backdrop-blackout" : ""}`} ></div>

    <div
      class="Modal-content"
      onmouseup={backdropClick}
      role="dialog"
      tabindex="-1"
      aria-label="Close dialog"
    >
      {#if showCloseButton}
        <div class="Modal-close-button-wrapper" role="button" tabindex="-1" onmouseup={() => hideModal?.()}>
          <button class="Modal-close-button">
            <CloseFillSystem/>
          </button>
        </div>
      {/if}

      {@render children()}

    </div>
  </div>
</Portal>


<style lang="scss">
  .Modal-backdrop {
    position: fixed;
    display: flex;
    z-index: var(--zindex-modal-backdrop);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-backdrop);

    &.Modal-backdrop-blackout {
      background-color: var(--bg-backdrop-blackout);
    }
  }

  .Modal-close-button-wrapper {
    position: fixed;
    right: .25rem;
    top: 0.25rem;
  }

  .Modal-close-button {
    background-color: transparent;
    position: relative;
    z-index: var(--zindex-modal);
    font-size: 1rem;
    height: 2em;
    width: 2em;
    cursor: pointer;
    display: flex;
    color: white;
    border-radius: var(--border-radius-button);
    transition: var(--transition-base);
    padding: .25rem;
    border: none;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  .Modal-content {
    position: fixed;
    z-index: var(--zindex-modal);
    top: 0;
    height: 100vh;
    width: 100%;
    overflow-y: scroll;
    background: transparent;
    display: flex;
    padding: 2rem 0;
  }
</style>
