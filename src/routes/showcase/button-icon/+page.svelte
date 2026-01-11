<script lang="ts">
  import { Button, ButtonMilk } from '$lib';
  import { PageTitle, Divider, Title, Box } from '$layout';
  import { Search2LineSystem, CloseLineSystem, ArrowRightSLineArrows } from 'svelte-remix';
</script>

<PageTitle>Button Icon</PageTitle>
<Divider/>

<Box>
  <Title>Button iconButton</Title>
  <div style="display: flex; flex-wrap: wrap; gap: 8px;">
    <Button iconButton>
      <Search2LineSystem size="1em" />
    </Button>
    <Button iconButton disabled>
      <Search2LineSystem size="1em" />
    </Button>
    <Button iconButton loading>
      <Search2LineSystem size="1em" />
    </Button>
    <Button iconButton>
      <CloseLineSystem size="1em" />
    </Button>
    <Button iconButton>
      <ArrowRightSLineArrows size="1em" />
    </Button>
  </div>
</Box>

<Box>
  <Title>ButtonMilk iconButton</Title>
  <div class="buttons-wrapper">
    <ButtonMilk iconButton size="sm" variant="base-contained">
      <Search2LineSystem size="1em" />
    </ButtonMilk>
    <ButtonMilk iconButton size="md" variant="primary-emphasis">
      <Search2LineSystem size="1em" />
    </ButtonMilk>
    <ButtonMilk iconButton size="lg" variant="danger-outlined">
      <CloseLineSystem size="1em" />
    </ButtonMilk>
  </div>
</Box>

<style>
  .buttons-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: flex-start;
  }
</style>