<script lang="ts">
  import { CheckboxCircleFillSystem} from 'svelte-remix';
  import { ButtonMilk, type ButtonInstance } from '$lib';
  import { PageTitle, Divider } from '$layout';


  let buttonRef: ButtonInstance;
  const buttonVariants = [
    "primary-emphasis",
    "primary-outlined",
    "primary-contained",
    "base-contained",
    "base-outlined",
    "base-emphasis",
    "base-text",
    "danger-contained",
    "danger-outlined",
    "danger-emphasis"
  ] as const;

  let dynamicVariant: (typeof buttonVariants)[number] = buttonVariants[0];

  const cycleVariant = () => {
    const nextIndex =
      (buttonVariants.indexOf(dynamicVariant) + 1) % buttonVariants.length;
    dynamicVariant = buttonVariants[nextIndex];
  };
</script>

<PageTitle>Button Milk Component</PageTitle>
<Divider/>

<div class='showcase-block'>
  <ButtonMilk onClick={() => buttonRef.focus()} variant="base-contained" size="sm"><CheckboxCircleFillSystem size="1em"/>Focus button</ButtonMilk>
  <ButtonMilk bind:this={buttonRef} variant="base-outlined" size="sm"><CheckboxCircleFillSystem size="1em"/>To be focused</ButtonMilk>
</div>

<Divider/>

<div class='showcase-block dynamic-variant'>
  <div class='dynamic-variant__controls'>
    <label>
      Variant
      <select bind:value={dynamicVariant}>
        {#each buttonVariants as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
    </label>
    <ButtonMilk variant="base-outlined" size="sm" onClick={cycleVariant}>
      Next variant
    </ButtonMilk>
  </div>

  <ButtonMilk variant={dynamicVariant} size="md">
    Live variant: {dynamicVariant}
  </ButtonMilk>
</div>

<Divider/>

<div class='showcase-block'>
  <ButtonMilk variant="base-emphasis" size="sm"><CheckboxCircleFillSystem size="1em"/>Small button</ButtonMilk>
  <ButtonMilk variant="base-emphasis" size="md"><CheckboxCircleFillSystem size="1em"/>Md button</ButtonMilk>
  <ButtonMilk variant="base-emphasis" size="lg"><CheckboxCircleFillSystem size="1em"/>Large button</ButtonMilk>
</div>

<div class='showcase-block'>
  <ButtonMilk variant="primary-emphasis" size="lg"><CheckboxCircleFillSystem size="1em"/>Primary emphasis milk button</ButtonMilk>
  <ButtonMilk variant="primary-outlined" size="lg"><CheckboxCircleFillSystem size="1em"/>Primary outlined milk button</ButtonMilk>
  <ButtonMilk variant="primary-contained" size="lg"><CheckboxCircleFillSystem size="1em"/>Primary contained milk button</ButtonMilk>
</div>

<div class='showcase-block'>
  <ButtonMilk variant="base-contained" size="lg"><CheckboxCircleFillSystem size="1em"/>Base contained milk button</ButtonMilk>
  <ButtonMilk variant="base-outlined" size="lg">Base outlined milk button</ButtonMilk>
  <ButtonMilk variant="base-emphasis" size="lg">Base emphasis milk button</ButtonMilk>
  <ButtonMilk variant="base-text" size="lg">Base text milk button</ButtonMilk>
</div>

<div class='showcase-block'>
  <ButtonMilk variant="danger-contained" size="lg"><CheckboxCircleFillSystem size="1em"/>Danger contained milk button</ButtonMilk>
  <ButtonMilk variant="danger-outlined" size="lg">Danger outlined milk button</ButtonMilk>
  <ButtonMilk variant="danger-emphasis" size="lg">Danger emphasis milk button</ButtonMilk>
</div>


<style>
  .showcase-block {
    display: flex; 
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: .5rem; 
    margin-bottom: 1rem;
  }

  .dynamic-variant {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .dynamic-variant__controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: .5rem;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: .875rem;
    gap: .25rem;
  }

  select {
    padding: .25rem .5rem;
    border-radius: .25rem;
  }
</style>
