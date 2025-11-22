<script lang="ts">
  import { TextInputMilk } from '$lib';
  import { Divider, PageTitle, Title, Box } from '$layout';

</script>

<PageTitle>Text Input Milk with Autofocus</PageTitle>
<Divider/>

<Box>
  <p>This TextInput should be focused by default</p>
  <TextInputMilk autoFocus size="lg" placeholder="Text Input Milk Autofocus" />
</Box>
