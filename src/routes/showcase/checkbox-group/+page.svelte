<script lang="ts">
  import { CheckboxGroup } from '$lib';
  import type { CheckboxGroupItem } from '$lib/components/CheckboxGroup/CheckboxGroup.types';
  import { Divider, PageTitle, Title } from '$layout';
  let agree = $state(false);

  let selectedValues = $state(['First']);
  let options: CheckboxGroupItem[] = [{
    kind: 'header',
    label: 'Primary',
  }, {
    label: 'First',
    value: 'First',
  }, {
    label: 'Second',
    value: 'Second',
  }, {
    kind: 'header',
    label: 'Secondary',
  }, {
    label: 'Third',
    value: 'Third',
  }];

  let scrollOptions: CheckboxGroupItem[] = [{
    kind: 'header',
    label: 'Scrollable',
  }, {
    label: 'Alpha',
    value: 'Alpha',
  }, {
    label: 'Beta',
    value: 'Beta',
  }, {
    label: 'Gamma',
    value: 'Gamma',
  }, {
    label: 'Delta',
    value: 'Delta',
  }, {
    label: 'Epsilon',
    value: 'Epsilon',
  }, {
    label: 'Zeta',
    value: 'Zeta',
  }, {
    label: 'Eta',
    value: 'Eta',
  }, {
    label: 'Theta',
    value: 'Theta',
  }, {
    label: 'Iota',
    value: 'Iota',
  }, {
    label: 'Kappa',
    value: 'Kappa',
  }];
</script>

<PageTitle>Checkbox Group</PageTitle>
<Divider></Divider>

<Title>Default</Title>
<CheckboxGroup
  legend='Make your choise'
  {options}
  selectedValues={selectedValues}
  name='test-multiselect'
/>

<Divider></Divider>

<Title>Scrollable</Title>
<CheckboxGroup
  legend='Limit height'
  options={scrollOptions}
  selectedValues={selectedValues}
  name='test-multiselect-scroll'
  maxHeight={200}
/>
