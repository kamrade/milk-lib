	<script lang='ts'>
    import { StickyHeader } from '$lib';
  </script>
  
  <StickyHeader>
		<header class="header">
			<div class="container">
				<h1 class="title-h1">Milk KIT</h1>
			</div>
		</header>
	</StickyHeader>

  <style>

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .header {
      background: var(--bg-base-emp-100);
      color: var(--text-base-inv);
      padding: 0.25rem;
    }

    .title-h1 {
      font-size: 1rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0;
    }
  </style>