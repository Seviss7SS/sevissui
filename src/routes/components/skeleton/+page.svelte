<script>
  import Button from "$lib/components/Button/Button.svelte";
  import Skeleton from "$lib/components/Skeleton/Skeleton.svelte";

  const labelClass = "text-xl mb-sm font-bold";

  const sizes = ["btn-xs", "btn-sm", "btn-md", "btn-lg", "btn-xl"];
</script>

<div class="p-lg flex flex-col gap-y-md">
  <h1 class="text-3xl mb-md font-black">SevissUI</h1>
  <hr />
  <div class="flex flex-col gap-y-md">
    <h3 class={labelClass}>Button</h3>
    {#each sizes as size}
      <Skeleton>
        <Button label="Button" variant="btn-filled-primary" {size} />
      </Skeleton>
    {/each}
  </div>
</div>
