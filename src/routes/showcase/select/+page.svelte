<script lang="ts">
  import { Select, type ISelectGroupData, type ISelectItem } from '$lib';
  import { Divider, PageTitle, Title, Box } from '$layout';

  let { data }: {
    data: { selectData: ISelectGroupData[] }
  } = $props();

  let value_first: (ISelectItem) = $state(data?.selectData[0]?.items[0] || null);
  let value_second: (ISelectItem | null) = $state(null);
  let value_third: (ISelectItem) = $state(data?.selectData[0]?.items[0] || null);

</script>

<PageTitle>Select</PageTitle>
<Divider></Divider>

<Box>
  <Title>Select base</Title>
  <Select 
    searchable={false}
    fullWidthMenu 
    placeholder="Enter City" 
    options={data.selectData} 
    bind:value={value_first}
  />
</Box>

<Box>
  <Title>Select with dropdown with scroll</Title>
  <Select menuMaxHeight={200} fullWidthMenu placeholder="Enter City" options={data.selectData} bind:value={value_second} />
</Box>

<Box>
  <Title>Disabled Select</Title>
  <Select disabled options={data.selectData} bind:value={value_third} />
</Box>

<Divider/>

<Box>
  <p>Value First: {value_first ? `${value_first?.title} | ${value_first?.value}` : ''}</p>
  <p>Value Second: {value_second ? `${value_second?.title} | ${value_second?.value}` : ''}</p>
</Box>
