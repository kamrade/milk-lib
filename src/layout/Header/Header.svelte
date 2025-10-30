	<script lang='ts'>
    import { StickyHeader } from '$lib';
  </script>
  
  <StickyHeader>
		<header class="header">
			<div class="container">
				<div class="flex gap-6">
					<h1 class="title-h1">Milk KIT</h1>
				</div>
			</div>
		</header>
	</StickyHeader>

  <style>
    .header {
      background: var(--bg-base-emp-100);
      color: var(--text-base-inv);
      padding: 0.5rem;
    }

    .title-h1 {
      font-size: 1rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  </style>