<script lang="ts">
  import { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent } from "$lib";
  import { PageTitle, Divider, Title } from '$layout';
  let value = $state('accordion-2');
</script>

<PageTitle>Accordion</PageTitle>
<Divider/>

<div class="mb-3">
  <AccordionRoot {value}>

    <AccordionItem value="accordion-1">
      <AccordionTrigger>
        <span class="text-sm font-medium">Product Information</span>

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
        <span class="text-sm font-medium">Shipping Details</span>
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
        <span class="text-sm font-medium">Return Policy</span>
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
