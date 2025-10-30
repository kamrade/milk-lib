<script lang="ts">
  import { CheckboxCircleFillSystem} from 'svelte-remix';
  import { ButtonMilk, type ButtonInstance } from '$lib';


  let buttonRef: ButtonInstance;
</script>

Button Milk Component

<div class='showcase-block'>
  <ButtonMilk onClick={() => buttonRef.focus()} variant="base-contained" size="sm"><CheckboxCircleFillSystem size="1em"/>Focus button</ButtonMilk>
  <ButtonMilk bind:this={buttonRef} variant="base-outlined" size="sm"><CheckboxCircleFillSystem size="1em"/>To be focused</ButtonMilk>
</div>

<hr />

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
</div>


<style>
  .showcase-block {
    display: flex; 
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: .5rem; 
    margin-bottom: 1rem;
  }
</style>