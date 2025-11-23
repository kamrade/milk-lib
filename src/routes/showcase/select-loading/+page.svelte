<script lang="ts">
  import {Select, type ISelectGroupData, type ISelectItem } from '$lib';
  import { Divider, PageTitle, Title, Box } from '$layout';

  let { data }: {
    data: { selectData: Promise<ISelectGroupData[]> }
  } = $props();

  let value_first: (ISelectItem | null) = $state(null);

</script>

<PageTitle>Select Async</PageTitle>
<Divider/>

{#await data.selectData}
  Loading...
{:then selectData}
  <Box>
    <Select fullWidthMenu placeholder="Enter City" options={selectData} bind:value={value_first} />
  </Box>

  <Divider/>

  <Box>
    <p>Value: {value_first ? `${value_first?.title} | ${value_first?.value}` : ''}</p>
  </Box>
{:catch e}
  Error: {e}
{/await}
