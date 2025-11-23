<script lang="ts">
  let { size=16 }: { size?: number } = $props();
</script>

<div class="loading-indicator" style={`font-size: ${size}px;`}>
  <span class="loading-indicator-item item-1"></span>
  <span class="loading-indicator-item item-2"></span>
  <span class="loading-indicator-item item-3"></span>
</div>

<style lang="scss">
  .loading-indicator {
    display: inline-flex;
    align-items:center;
    width: 1em;
    height: 1em;
    padding: 0.375em 0;
    gap: 0.125em;

    .loading-indicator-item {
      width: 0.25em;
      height: 0.25em;
      background: var(--icon-base-placeholder);
      border-radius: 50%;
      transform-origin: center;
      will-change: transform, opacity;

      &.item-1 {
        animation: blink-1 1s ease-in-out 0ms infinite;
      }
      &.item-2 {
        animation: blink-1 1s ease-in-out 160ms infinite;
      }
      &.item-3 {
        animation: blink-1 1s ease-in-out 320ms infinite;
      }
    }
  }

  @keyframes blink-1 {
    0% {
      opacity: 0.5;
      transform: scale(0.5);
    }
    20% {
      opacity: 1;
      transform: scale(1);
    }
    40% {
      opacity: 1;
      transform: scale(1);
    }
    60% {
      opacity: 0.5;
      transform: scale(0.5);
    }
    80% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  }

</style>
