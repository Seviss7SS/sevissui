<script>
  import InputField from "$lib/components/InputField/InputField.svelte";

  const labelClass = "text-xl mb-sm font-bold";

  let value = "";
</script>

<div class="p-lg flex flex-col gap-y-md">
  <h1 class="text-3xl mb-md font-black">Flowbite</h1>
  <hr />
  <div>
    <h3 class={labelClass}>Default</h3>
    <div>Value: {value}</div>
    <InputField
      label="Your message"
      name="message"
      onInput={(e) => (value = e.currentTarget.value)}
    />
  </div>
  <div>
    <h3 class={labelClass}>Filled</h3>
    <div>Value: {value}</div>
    <InputField
      label="Your message"
      name="message"
      variant="input-filled-green-400"
      onInput={(e) => (value = e.currentTarget.value)}
    />
  </div>
</div>
