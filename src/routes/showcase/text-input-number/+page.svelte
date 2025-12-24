<script lang="ts">
  import { TextInput, TextInputMilk, TextInputBlock } from '$lib';
  import { Divider, PageTitle, Title, Box } from '$layout';
</script>

<PageTitle>Text Input Number</PageTitle>
<Divider/>

<Box underline>
  <Title>TextInput: default number (fraction allowed)</Title>
  <TextInput type="number" placeholder="123.45" />
</Box>

<Box underline>
  <Title>TextInput: prohibitFraction</Title>
  <TextInput type="number" prohibitFraction placeholder="Only integers" />
</Box>

<Box underline>
  <Title>TextInput: prohibitNegative</Title>
  <TextInput type="number" prohibitNegative placeholder="No negative values" />
</Box>

<Box underline>
  <Title>TextInput: prohibitFraction + prohibitNegative</Title>
  <TextInput type="number" prohibitFraction prohibitNegative placeholder="Only positive integers" />
</Box>

<Box underline>
  <Title>TextInputMilk: number examples</Title>
  <TextInputMilk type="number" size="md" placeholder="Milk number" />
  <TextInputMilk type="number" size="md" prohibitFraction placeholder="Milk integers only" />
</Box>

<Box underline>
  <Title>TextInputBlock: number examples</Title>
  <TextInputBlock type="number" size="lg" placeholder="Block number" />
  <TextInputBlock type="number" size="lg" prohibitNegative prohibitFraction placeholder="Block positive integers" />
</Box>
