<script lang="ts">
  import { Select, type ISelectGroupData, type ISelectItem } from '$lib';
  import { Divider, PageTitle, Title, Box } from '$layout';

  let { data }: {
    data: { selectData: ISelectGroupData[] }
  } = $props();

  let value_underlined: (ISelectItem | null) = $state(data?.selectData[0]?.items[0] || null);
  let value_contained: (ISelectItem | null) = $state(data?.selectData[0]?.items[0] || null);
  let value_text: (ISelectItem | null) = $state(data?.selectData[0]?.items[0] || null);
</script>

<PageTitle>Select Variants</PageTitle>
<Divider></Divider>

<Box>
  <Title>Underlined</Title>
  <Select
    variant="underlined"
    size="sm"
    searchable={false}
    fullWidthMenu
    placeholder="Underlined sm"
    options={data.selectData}
    bind:value={value_underlined}
  />
</Box>

<Box>
  <Title>Contained</Title>
  <Select
    variant="contained"
    size="md"
    searchable={false}
    fullWidthMenu
    placeholder="Contained md"
    options={data.selectData}
    bind:value={value_contained}
  />
</Box>

<Box>
  <Title>Text</Title>
  <Select
    variant="text"
    size="lg"
    searchable={false}
    fullWidthMenu
    placeholder="Text lg"
    options={data.selectData}
    bind:value={value_text}
  />
</Box>

<Divider/>

<Box>
  <p>Underlined: {value_underlined ? `${value_underlined?.title} | ${value_underlined?.value}` : ''}</p>
  <p>Contained: {value_contained ? `${value_contained?.title} | ${value_contained?.value}` : ''}</p>
  <p>Text: {value_text ? `${value_text?.title} | ${value_text?.value}` : ''}</p>
</Box>
