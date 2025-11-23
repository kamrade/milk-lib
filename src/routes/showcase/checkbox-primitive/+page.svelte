<script lang="ts">
  import {Checkbox } from '$lib';
  import { Divider, PageTitle, Title, Box } from '$layout';
  let agree = $state(false);
</script>

<PageTitle>Checkbox Primitive</PageTitle>
<Divider></Divider>

<label class="label" for="agree1">
  <span>
    <Checkbox id="agree1" bind:checked={agree} name="agree"/>
  </span>
  <span>По сообщению Royal World Thailand, ключевые королевские мероприятия, включая традиционную церемонию в тронном зале Амарин Виничай в Бангкоке, были отменены по распоряжению Короля. Причиной стало обострение конфликта, начавшегося 24 июля на тайско-камбоджийской границе, в результате которого пострадали гражданские лица в провинциях Убонратчатхани, Сурин и Сисакет.</span>
</label>

<p class="my-3">Agree: {agree}</p>

<style>
  .label {
    display: flex;
    gap: 6px;
    margin: 1rem 0;
  }
</style>