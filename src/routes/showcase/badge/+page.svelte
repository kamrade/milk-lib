<script lang="ts">
  import {  Badge } from "$lib";
  import { PageTitle, Divider, Title } from '$layout'
</script>

<PageTitle>Badge</PageTitle>
<Divider/>

<div class="mb-3">
  <Title>Badge basic</Title>
  <Badge>Test Badge</Badge>
  <Badge variant="primary">Primary Badge</Badge>
  <Badge variant="secondary">Secondary Badge</Badge>
  <Badge variant="outline">Outline Badge</Badge>
  <Badge variant="warning">Warning Badge</Badge>
  <Badge variant="danger">Danger Badge</Badge>
</div>

<Divider/>

<div class="mb-3">
  <Title>Badge basic</Title>
  <Badge href="#">Test Badge</Badge>
  <Badge href="#" variant="primary">Primary Badge</Badge>
  <Badge href="#" variant="secondary">Secondary Badge</Badge>
  <Badge href="#" variant="outline">Outline Badge</Badge>
  <Badge href="#" variant="warning">Warning Badge</Badge>
  <Badge href="#" variant="danger">Danger Badge</Badge>
</div>

<Divider/>

<div class="mb-3">
  <Title>Badge shapes</Title>
  <Badge href="#" shape="rounded">Rounded Badge</Badge>
  <Badge href="#" shape="circled" variant="secondary">Circled Badge</Badge>
</div>

<Divider/>

<div class="box"></div>

<style lang="scss">
  .box {
    width: 200px;
    height: 200px;
    background: var(--panel-success);
  }
</style>
