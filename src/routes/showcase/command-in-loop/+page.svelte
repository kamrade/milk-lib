<script lang="ts">
  import {
    CommandRoot,
    CommandInput,
    CommandList,
    CommandGroup,
    CommandItem,
    TextInputMilk
  } from '$lib';
  import { Divider, PageTitle, Title, Box } from '$layout';

  const groupList = [{
    heading: 'Suggestions',
    items: [{
      title: 'Calendar'
    }, {
      title: 'Search Emoji'
    }, {
      title: 'Calculator'
    }]
  }, {
    heading: 'Settings',
    items: [{
      title: 'Profile'
    }, {
      title: 'Billing'
    }, {
      title: 'Options'
    }]
  }]

</script>

<PageTitle>Command in the loop</PageTitle>
<Divider></Divider>

<Box>
  <CommandRoot>  
    <CommandInput></CommandInput>
    
    <CommandList>
      {#each groupList as group (group.heading)}
        <CommandGroup heading={group.heading}>
          {#each group.items as item (item.title)}
            <CommandItem>{item.title}</CommandItem>
          {/each}
        </CommandGroup>
      {/each}
    </CommandList>

  </CommandRoot>
</Box>

<TextInputMilk id="new-100" placeholder="New item" size="lg"/>
