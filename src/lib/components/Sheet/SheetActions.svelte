<script lang="ts">
  import { ButtonMilk } from "$lib";
  import type { ISheetActionsProps } from './Sheet.types';
  import { CloseLargeLineSystem } from "svelte-remix";
  let { children, hide }: ISheetActionsProps = $props();

</script>

<div class="SheetActions">
  {@render children()}
  {#if hide}
    <div class="SheetActions-hide">
      <ButtonMilk onClick={hide} iconButton variant="base-contained" size="sm">
        <CloseLargeLineSystem size="1em"/>
      </ButtonMilk>
    </div>
  {/if}
</div>

<style lang="scss">

  .SheetActions {
    padding: .5rem;
    border-bottom: 1px solid var(--line-base);

    .SheetActions-hide {
      position: absolute;
      right: .5rem;
      top: .5rem;
    }
  }

</style>
