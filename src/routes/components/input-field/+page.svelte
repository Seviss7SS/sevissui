<script>
  import InputField from "$lib/components/InputField/InputField.svelte";
  import Button from "$lib/components/Button/Button.svelte";

  const labelClass = "text-xl mb-sm font-bold";

  let value = "";
</script>

<div class="p-lg flex flex-col gap-y-md">
  <h1 class="text-3xl mb-md font-black">Flowbite</h1>
  <hr />
  <div>
    <h3 class={labelClass}>Default</h3>
    <div>Value: {value}</div>
    <InputField label="Your message" name="message" bind:value />
  </div>
  <div>
    <h3 class={labelClass}>Filled</h3>
    <div class="text-center">Value: {value}</div>
    <InputField
      label="Your message"
      name="message"
      variant="input-filled-green-400"
      align="text-center"
      bind:value
      centered
    >
      <Button slot="right">{">"}</Button>
    </InputField>
  </div>
</div>
