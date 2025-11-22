<script lang="ts">
  import { TextInputBlock } from '$lib';
  import { CheckboxCircleFillSystem, ArrowRightSLineArrows } from 'svelte-remix';
  import { Divider, PageTitle } from '$layout';
</script>

<PageTitle>Text Input Autofocus</PageTitle>
<Divider/>

<TextInputBlock autoFocus size='lg' placeholder="Text Input with snippets">
  {#snippet prefix()}
    <CheckboxCircleFillSystem size="1em"/>
  {/snippet}
  {#snippet suffix()}
    <ArrowRightSLineArrows size="1em" />
  {/snippet}
</TextInputBlock>
