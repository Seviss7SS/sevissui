<script>
  import Button from "$lib/components/Button/Button.svelte";

  const labelClass = "text-xl mb-sm font-bold";

  const sizes = ["btn-xs", "btn-sm", "btn-md", "btn-lg", "btn-xl"];
</script>

<div class="p-lg flex flex-col gap-y-md">
  <h1 class="text-3xl mb-md font-black">SevissUI</h1>
  <hr />
  <div class="flex flex-col gap-y-md">
    <h3 class={labelClass}>Filled</h3>
    {#each sizes as size}
      <div class="font-bold uppercase">Size: {size.slice(4)}</div>
      <Button label="Button" variant="btn-filled" {size} />
    {/each}
  </div>
  <div class="flex flex-col gap-y-md">
    <h3 class={labelClass}>Circle</h3>
    {#each sizes as size}
      <div class="font-bold uppercase">Size: {size.slice(4)}</div>
      <Button circle label="Button" variant="btn-filled" {size} />
    {/each}
  </div>
  <div class="flex flex-col gap-y-md">
    <h3 class={labelClass}>Form</h3>
    <Button
      action="/components/button"
      method="get"
      component="form"
      label="Button"
      variant="btn-filled"
    />
  </div>
</div>
