<script lang="ts">
  import {
    Sheet,
    SheetContent,
    ButtonMilk,
    TextInputBlock,
  } from "$lib";
  import { Divider, PageTitle } from '$layout';
  import {browser} from "$app/environment";
  import { Search2LineSystem } from "svelte-remix";


  let isSheetShowed = $state<boolean>(false);
  let isModalShowed = $state<boolean>(false);
  let sheetSide = $state<'left' | 'right' | 'top' | 'bottom'>('right');

  const showSheet = (side: 'left' | 'right' | 'top' | 'bottom' = 'right') => {
    sheetSide = side;
    isSheetShowed = true;
  };
  const hideSheet = () => isSheetShowed = false;
</script>


<PageTitle>Sheet</PageTitle>
<Divider/>

<ButtonMilk size="md" variant="base-emphasis" onClick={() => showSheet('top')}>
  Open Sheet (top)
</ButtonMilk>

{#if browser}
  <Sheet isOpen={isSheetShowed} hide={hideSheet} side={sheetSide} hideOnClickOutside size={100} backdrop>

    <SheetContent>
      <TextInputBlock size="lg" autoFocus placeholder="Search" variant="text">
        {#snippet prefix()}
          <Search2LineSystem size="1em" />
        {/snippet}
      </TextInputBlock>
    </SheetContent>


  </Sheet>
{/if}
