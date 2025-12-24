<script lang="ts">
  import { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent } from "$lib";
  import { PageTitle, Divider, Title } from '$layout'
  let value = $state('accordion-2');
  import { ArchiveDrawerLineBusiness } from 'svelte-remix';
</script>

<PageTitle>Accordion Fancy</PageTitle>
<Divider/>

<div class="mb-3">
  <AccordionRoot {value}>

    <AccordionItem value="accordion-1">
      <AccordionTrigger>
        <span style="padding: .25rem .25rem .25rem 0">
          <ArchiveDrawerLineBusiness size="1em"></ArchiveDrawerLineBusiness>
        </span>
        <span class="text-sm uppercase tracking-wide">Product Information</span>

      </AccordionTrigger>
      <AccordionContent>
        <span class="text-sm">
          Our flagship product combines cutting-edge technology with sleek design.
          Built with premium materials, it offers unparalleled performance and
          reliability.
        </span>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="accordion-2">
      <AccordionTrigger>
        <span class="text-sm uppercase tracking-wide">Shipping Details</span>
      </AccordionTrigger>
      <AccordionContent>
        <span class="text-sm">
          Our flagship product combines cutting-edge technology with sleek design.
          Built with premium materials, it offers unparalleled performance and
          reliability.
        </span>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="accordion-3">
      <AccordionTrigger>
        <span class="text-sm uppercase tracking-wide">Return Policy</span>
      </AccordionTrigger>
      <AccordionContent>
        <span class="text-sm">
          Our flagship product combines cutting-edge technology with sleek design.
          Built with premium materials, it offers unparalleled performance and
          reliability.
        </span>
      </AccordionContent>
    </AccordionItem>

  </AccordionRoot>
</div>
