<script>
  import Button from "$lib/components/Button/Button.svelte";

  const labelClass = "text-xl mb-sm font-bold";
  const sizes = ["btn-xs", "btn-sm", "btn-md", "btn-lg", "btn-xl"];
  const variants = ["btn-filled", "btn-outlined", "btn-subtle", "btn-text"];
</script>

<div class="p-lg flex flex-col gap-y-md">
  <h1 class="text-3xl mb-md font-black">SevissUI</h1>
  <hr />
  <div class="flex flex-col gap-y-md">
    {#each sizes as size}
      {#each variants as variant}
        <div class="font-bold uppercase">
          Size: {size.slice(4)} | Variant: {variant.slice(4)}
        </div>
        <Button label="Button" {variant} {size} />
      {/each}
    {/each}
  </div>
  <div class="flex flex-col gap-y-md">
    <h3 class={labelClass}>Circle</h3>
    {#each sizes as size}
      {#each variants as variant}
        <div class="font-bold uppercase">
          Size: {size.slice(4)} | Variant: {variant.slice(4)}
        </div>
        <Button circle label="Button" {variant} {size} />
      {/each}
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
  <div class="flex flex-col gap-y-md">
    <h3 class={labelClass}>Disabled</h3>
    <Button disabled label="Button" variant="btn-filled" />
  </div>

  <div class="flex flex-col gap-y-md">
    <h3 class={labelClass}>View More Button</h3>
    <Button 
      variant="btn-outlined" 
      color="text-blue-400 border-blue-400 hover:bg-white hover:text-blue-400"
      size="btn-md"
      class="rounded-full gap-x-2 shadow-sm hover:scale-[0.97] transition-transform"
    >
      View More
      <span class="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center">
        <span class="w-1.5 h-1.5 border-t-2 border-r-2 border-current rotate-45" />
      </span>
    </Button>
  </div>
</div>
