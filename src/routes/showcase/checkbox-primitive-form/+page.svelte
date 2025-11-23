<script lang="ts">
  import {Checkbox, ButtonMilk } from '$lib';
  import { Divider, PageTitle, Title, Box } from '$layout';
  let agree = $state(false);
</script>

<PageTitle>Checkbox Primitive in the Form</PageTitle>
<Divider></Divider>

<div class="p-6 border border-gray-300 rounded-xl">
  <form onsubmit={(e) => console.log(e)}>

    <label class="label" for="agree">
      <span style="padding-top: 2px">
        <Checkbox id="agree" bind:checked={agree} name="agree" value="agree"/>
      </span>
      <span>По сообщению Royal World Thailand, ключевые королевские мероприятия, включая традиционную церемонию в тронном зале Амарин Виничай в Бангкоке, были отменены по распоряжению Короля. Причиной стало обострение конфликта, начавшегося 24 июля на тайско-камбоджийской границе, в результате которого пострадали гражданские лица в провинциях Убонратчатхани, Сурин и Сисакет.</span>
    </label>

    <Divider />

    <p>Agree: {agree}</p>

    <Divider />

    <ButtonMilk size="md" type="submit">Submit</ButtonMilk>

  </form>
</div>

<style>
  .label {
    display: flex;
    gap: .5rem;
  }
</style>