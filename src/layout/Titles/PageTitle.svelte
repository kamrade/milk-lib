<script lang="ts">
  import { type IPageTitleProps } from './Titles.types';
  let { children } : IPageTitleProps = $props();
</script>

<h1 class="PageTitle">
  {@render children()}
</h1>


<style>
  .PageTitle {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: .5em;
  }
</style>