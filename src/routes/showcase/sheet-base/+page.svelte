<script lang="ts">
  import {
    Sheet,
    SheetHeader,
    SheetActions,
    SheetContent,
    SheetDescription,
    SheetTitle,
    Modal,
    ModalDialog,
    ButtonMilk,
    DialogContent,
    DialogFooter
  } from "$lib";
  import { Divider, PageTitle, Title, Box } from '$layout';
  import {browser} from "$app/environment";
  import {ArrowDownSLineArrows, ArrowUpSLineArrows, CloseLineSystem} from "svelte-remix";

  let isSheetShowed = $state<boolean>(false);
  let isModalShowed = $state<boolean>(false);
  let sheetSide = $state<'left' | 'right'>('right');

  const showSheet = (side: 'left' | 'right' = 'right') => {
    sheetSide = side;
    isSheetShowed = true;
  };
  const hideSheet = () => isSheetShowed = false;

  const showModal = () => isModalShowed = true;
  const hideModal = () => isModalShowed = false;
</script>


<PageTitle>Sheet</PageTitle>
<Divider/>

<ButtonMilk size="md" variant="base-emphasis" onClick={() => showSheet('right')} style="margin-right: 12px;">
  Open Sheet (right)
</ButtonMilk>
<ButtonMilk size="md" variant="base-emphasis" onClick={() => showSheet('left')}>
  Open Sheet (left)
</ButtonMilk>

{#if browser}
  <Sheet isOpen={isSheetShowed} hide={hideSheet} side={sheetSide} hideOnClickOutside>


    <SheetActions hide={hideSheet}>
      <ButtonMilk iconButton variant="base-contained" size="sm">
        <ArrowDownSLineArrows size="1em"/>
      </ButtonMilk>
      <ButtonMilk iconButton variant="base-contained" size="sm">
        <ArrowUpSLineArrows size="1em"/>
      </ButtonMilk>
    </SheetActions>


    <SheetHeader>
      <SheetTitle>Sheet Title 1</SheetTitle>
      <SheetDescription>Some description</SheetDescription>
    </SheetHeader>


    <SheetContent>
      <ButtonMilk size="md" variant="base-contained" onClick={showModal}>Open Modal</ButtonMilk>
      {#if browser && isModalShowed}
        <Modal isVisible={isModalShowed} {hideModal} showCloseButton={true} hideOnEscape={true} closeOnBackdrop>
          <ModalDialog rounded>
            <DialogContent>
              {#if browser && isModalShowed}
                <Title>Test title</Title>
              {/if}
            </DialogContent>
            <DialogFooter>
              <ButtonMilk onClick={hideModal} variant="base-emphasis" size="md"><CloseLineSystem size="1em"/>Close</ButtonMilk>
            </DialogFooter>
          </ModalDialog>
        </Modal>
      {/if}
    </SheetContent>


  </Sheet>
{/if}
