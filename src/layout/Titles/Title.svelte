<script lang="ts">
  import { type ITitleProps } from './Titles.types';
  let { children } : ITitleProps = $props();
</script>

<h2 class="Title">
  {@render children()}
</h2>

<style>
  .Title {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: .5em;
  }
</style>