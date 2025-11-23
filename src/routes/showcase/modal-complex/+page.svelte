<script lang="ts">
  import {
    Button,
    Modal,
    ModalDialog,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogContent,
    DialogFooter,
    ButtonMilk, TextInputMilk
  } from "$lib";
  import { Divider, PageTitle, Title, Box } from '$layout';
  import { browser } from "$app/environment";
  import {CheckboxCircleFillSystem} from "svelte-remix";
  let isModalShowed = $state<boolean>(false);
  const hideModal = () => isModalShowed = false;


</script>

<Box>
  <PageTitle>Modal Dialog</PageTitle>
  <Divider></Divider>
  <Button onClick={() => isModalShowed = !isModalShowed}> Open Modal </Button>
</Box>

{#if browser && isModalShowed}
  <Modal isVisible={isModalShowed} {hideModal} showCloseButton hideOnEscape closeOnBackdrop>
    <ModalDialog rounded>
      {#if browser && isModalShowed}
        <DialogHeader>
          <DialogTitle>
            Dialog title
          </DialogTitle>
          <DialogDescription>
            Dialog description
          </DialogDescription>
        </DialogHeader>
        <DialogContent>
          <TextInputMilk size="md" variant="contained" placeholder="Enter new Value" />
        </DialogContent>
        <DialogFooter>
          <ButtonMilk variant="base-emphasis" size="md"><CheckboxCircleFillSystem size="1em"/>Md button</ButtonMilk>
        </DialogFooter>
      {/if}
    </ModalDialog>
  </Modal>
{/if}
