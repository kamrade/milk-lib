<script lang="ts">
  import { Select, type ISelectGroupData, type ISelectItem } from '$lib';
  import { Divider, PageTitle, Title, Box } from '$layout';

  let { data }: {
    data: { selectData: ISelectGroupData[] }
  } = $props();

  let value_sm: (ISelectItem | null) = $state(data?.selectData[0]?.items[0] || null);
  let value_md: (ISelectItem | null) = $state(data?.selectData[0]?.items[0] || null);
  let value_lg: (ISelectItem | null) = $state(data?.selectData[0]?.items[0] || null);
</script>

<PageTitle>Select Sizes</PageTitle>
<Divider></Divider>

<Box>
  <Title>Small</Title>
  <Select
    size="sm"
    searchable={false}
    fullWidthMenu
    placeholder="Small"
    options={data.selectData}
    bind:value={value_sm}
  />
</Box>

<Box>
  <Title>Medium</Title>
  <Select
    size="md"
    searchable={false}
    fullWidthMenu
    placeholder="Medium"
    options={data.selectData}
    bind:value={value_md}
  />
</Box>

<Box>
  <Title>Large</Title>
  <Select
    size="lg"
    searchable={false}
    fullWidthMenu
    placeholder="Large"
    options={data.selectData}
    bind:value={value_lg}
  />
</Box>

<Divider/>

<Box>
  <p>Small: {value_sm ? `${value_sm?.title} | ${value_sm?.value}` : ''}</p>
  <p>Medium: {value_md ? `${value_md?.title} | ${value_md?.value}` : ''}</p>
  <p>Large: {value_lg ? `${value_lg?.title} | ${value_lg?.value}` : ''}</p>
</Box>
