<!--

  White panel for Modal Window

-->

<script lang="ts">
  import { type IModalDialogProps } from './Modal.types';
  let { children, rounded, size='md' } : IModalDialogProps = $props();
</script>

<div class={`ModalDialog ModalDialog-${size}`} style={`border-radius: ${rounded ? 'var(--border-radius-window)' : '0'}`}>
  {@render children()}
</div>

<style lang="scss">
  .ModalDialog {
    padding: 1rem 0;
    background-color: white;
    width: 440px;
    max-width: 100%;
    position: relative;
    margin: auto;
    z-index: var(--zindex-modal);
    box-shadow: 0 0 200px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;

    &.ModalDialog-sm {
      width: 380px;
    }
    &.ModalDialog-lg {
      width: 640px;
    }
  }
</style>
