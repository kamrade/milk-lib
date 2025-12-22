<script lang="ts">
  import { CheckboxGroup } from '$lib';
  import type { CheckboxGroupItem } from '$lib/components/CheckboxGroup/CheckboxGroup.types';
  import { Divider, PageTitle, Title, Box } from '$layout';
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
  }]
</script>

<PageTitle>Checkbox Group</PageTitle>
<Divider></Divider>


<CheckboxGroup
  legend='Make your choise'
  {options}
  selectedValues={selectedValues}
  name='test-multiselect'
/>
