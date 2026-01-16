<script lang="ts">
  import { ButtonOverlay } from "$lib";
  import { PageTitle, Divider } from "$layout";

  const handleClick = (label: string) => () => {
    alert(`Clicked: ${label}`);
  };
</script>

<PageTitle>Button Overlay</PageTitle>
<Divider/>

<div class="grid">
  <ButtonOverlay aria-label="Card alpha" onClick={handleClick("Alpha")}>
    <div class="card">
      <div class="card-title">Alpha</div>
      <div class="card-text">Clickable card surface via semantic button.</div>
    </div>
  </ButtonOverlay>

  <ButtonOverlay aria-label="Card beta" onClick={handleClick("Beta")}>
    <div class="card">
      <div class="card-title">Beta</div>
      <div class="card-text">No visual button styles, just content.</div>
    </div>
  </ButtonOverlay>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }

  .card {
    padding: 1rem;
    border-radius: 12px;
    background: var(--bg-base);
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    border: 1px solid var(--line-base);
    text-align: left;
  }

  .card-title {
    font-weight: 600;
    margin-bottom: .25rem;
  }

  .card-text {
    font-size: .875rem;
    color: var(--text-base-subtle);
  }
</style>
