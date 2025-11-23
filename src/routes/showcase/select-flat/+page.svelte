<script lang="ts">
  import {Select, type ISelectItem } from '$lib';
  import { Divider, PageTitle, Title, Box } from '$layout';

  let { data }: {
    data: { selectData: ISelectItem[], selectDataMin: ISelectItem[] }
  } = $props();

  let value = $state<ISelectItem>(data?.selectData[0] || null);
  let value_single = $state<ISelectItem | null>(null);

</script>

<PageTitle>Select Flat</PageTitle>
<Divider></Divider>

<Box size='sm'>
  <Select fullWidthMenu placeholder="Enter Country" options={data.selectData} bind:value={value} />
</Box>

<Box size='sm'>
  <p style="padding: 0; margin: 0;">Value First: {value ? `${value?.title} | ${value?.value}` : ''}</p>
</Box>

<Box size='sm'>
  <Select searchable={false} placeholder="Enter Country" options={data.selectDataMin} bind:value={value_single} />
</Box>
