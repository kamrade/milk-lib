<script lang="ts">
  import { CheckboxGroup } from '$lib';
  import { Divider, PageTitle, Title, Box } from '$layout';
  let agree = $state(false);

  let selectedValues = $state(['First']);
  let options = [{
    label: 'First',
    value: 'First',
  }, {
    label: 'Second',
    value: 'Second',
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