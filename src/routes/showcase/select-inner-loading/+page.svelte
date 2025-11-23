<script lang="ts">
  import {Select, type ISelectGroupData, type ISelectItem } from '$lib';
  import { Divider, PageTitle, Title, Box } from '$layout';

  let { data }: {
    data: { selectData: Promise<ISelectGroupData[]> }
  } = $props();

  let value_first: (ISelectItem | null) = $state(null);

  function createDelayedArray(): Promise<ISelectItem[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([{title: "one", value: 'one'}, {title: "two", value: 'two'}, {title: "three", value: 'two'}]);
      }, 30000);
    });
  }

</script>

<PageTitle>Select Inner Loading</PageTitle>
<Divider/>

<Box>
  <Select fullWidthMenu placeholder="Enter City" options={data.selectData} bind:value={value_first} />
</Box>

<Box>
  <Select fullWidthMenu placeholder="Enter City" options={createDelayedArray()} bind:value={value_first} />
</Box>

<Divider/>

<Box>
  <p>Value: {value_first ? `${value_first?.title} | ${value_first?.value}` : ''}</p>
</Box>
