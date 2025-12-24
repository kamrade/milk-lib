<script lang="ts">
  import { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent } from '$lib';

  type AccordionFixtureProps = {
    value?: string | null;
  };

  let { value = 'item-1' }: AccordionFixtureProps = $props();
</script>

<AccordionRoot {value}>
  <AccordionItem value="item-1">
    <AccordionTrigger>First</AccordionTrigger>
    <AccordionContent>
      <div style="height: 20px;">First content</div>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>Second</AccordionTrigger>
    <AccordionContent>
      <div style="height: 24px;">Second content</div>
    </AccordionContent>
  </AccordionItem>
</AccordionRoot>
