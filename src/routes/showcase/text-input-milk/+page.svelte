<script lang="ts">
  import { TextInputMilk } from '$lib';
  import { Divider, PageTitle, Title, Box } from '$layout';
</script>

<PageTitle>Text Input Milk</PageTitle>
<Divider/>

<Box>
  <Title>Small Text Input</Title>
  <TextInputMilk size="sm" placeholder="Small Text Input" />
</Box>


<Box>
  <Title>Medium Text Input</Title>
  <TextInputMilk size="md" placeholder="Medium Text Input" />
</Box>


<Box>
  <Title>Large Text Input</Title>
  <TextInputMilk size="lg" placeholder="Large Text Input" />
</Box>

<Box>
  <Title>Large Underlined Invalid Text Input</Title>
  <TextInputMilk invalid variant="underlined" size="lg" placeholder="Large Underlined Invalid Text Input" />
</Box>

<Box>
  <Title>Large Underlined Disabled Text Input</Title>
  <TextInputMilk disabled variant="underlined" size="lg" placeholder="Large Underlined Disabled Text Input" />
</Box>

<Box>
  <Title>Large Underlined Readonly Text Input</Title>
  <TextInputMilk readonly variant="underlined" size="lg" placeholder="Large Underlined Readonly Text Input" />
</Box>

<Box>
  <Title>Blank text input</Title>
  <TextInputMilk variant="text" size="lg" placeholder="Enter your text here" />
</Box>
