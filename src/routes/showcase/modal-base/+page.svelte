<script lang="ts">
  import { browser } from '$app/environment';
  import {
    Button,
    ButtonMilk,
    type ISelectGroupData,
    Modal,
    ModalDialog,
    TextInput,
    type TextInputInstance,
    Select, type ISelectItem, DialogContent
  } from "$lib";

  import { Divider, PageTitle, Title, Box } from '$layout';

  let { data }: {
    data: { selectData: ISelectGroupData[] }
  } = $props();

  let isModalShowed = $state<boolean>(false);
  let value = $state<ISelectItem | null>(null);

  let textInputBlock = $state<TextInputInstance | null>(null);
  let textInputValue = $state("");

  $effect(() => {
    if (!isModalShowed) {
      textInputValue = "";
    }
  });

</script>

<Box>
  <PageTitle>Modal Dialog</PageTitle>
  <Divider></Divider>
  <Button onClick={() => isModalShowed = !isModalShowed}> Open Modal </Button>
</Box>

{#if browser && isModalShowed}
  <Modal isVisible={isModalShowed} hideModal={() => isModalShowed = false} showCloseButton={true} hideOnEscape={true} closeOnBackdrop>
    <ModalDialog rounded>
      {#if browser && isModalShowed}
        <DialogContent>
          <h1 class="modal-title" >Test title</h1>
          <div class='box'>
            <TextInput bind:value={textInputValue} placeholder="Your text" bind:this={textInputBlock} autoFocus />
            <div class="current-value">Current value: {textInputValue}</div>
          </div>
          <div class="mb-3">
            <Select searchable={false} placeholder="Enter Country" options={data.selectData} bind:value={value} />
          </div>
          <ButtonMilk size='lg' onClick={() => textInputBlock?.focus()}>Focus</ButtonMilk>
          <div style="height: 1200px"></div>
        </DialogContent>
      {/if}
    </ModalDialog>
  </Modal>
{/if}

<div style="height: 1500px">Stub</div>

<style lang="scss">
  .modal-title {
    font-size: 24px;
    line-height: 1;
    margin: 0 0 0.75rem;
    font-weight: 500;
  }

  .box {
    margin-bottom: .75rem;
  }

  .current-value {
    font-size: var(--font-size-md);
    color: var(--text-base-muted);
  }
</style>