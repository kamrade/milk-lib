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
  import { CalendarLineBusiness, UserSmileLineUserFaces } from 'svelte-remix';
</script>

<PageTitle>Command Flat</PageTitle>
<Divider></Divider>

<Box>
  <CommandRoot>

    <CommandInput></CommandInput>

    <CommandList>
      <CommandGroup>
        <CommandItem onClick={() => alert("Calendar")}>
          <CalendarLineBusiness size="1em"/>
          <span>Calendar</span>
        </CommandItem>
        <CommandItem onClick={() => alert("Search Emoji")}>
          <UserSmileLineUserFaces size="1em" />
          <span>Search Emoji</span>
        </CommandItem>
        <CommandItem disabled>Calculator</CommandItem>
      </CommandGroup>
    </CommandList>

  </CommandRoot>
</Box>


<Box>
  <CommandRoot>
    <CommandList>
      <CommandGroup>
        <CommandItem onClick={() => alert("Calendar")}>
          <CalendarLineBusiness size="1em"/>
          <span>Calendar</span>
        </CommandItem>
        <CommandItem onClick={() => alert("Search Emoji")}>
          <UserSmileLineUserFaces size="1em" />
          <span>Search Emoji</span>
        </CommandItem>
        <CommandItem disabled>Calculator</CommandItem>
      </CommandGroup>
    </CommandList>

  </CommandRoot>
</Box>


<TextInputMilk id="new-100" placeholder="Focus on this after press 'Tab'" size="lg"/>
