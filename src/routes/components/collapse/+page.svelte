<script lang="ts">
  import Button from "$lib/components/Button/Button.svelte";
  import Collapse from "$lib/components/Collapse/Collapse.svelte";

  const labelClass = "text-xl mb-sm font-bold";

  let open = false;

  const items = [
    {
      label: "Value 1",
      value: "1",
    },
    {
      label: "Value 2",
      value: "2",
    },
    {
      label: "Value 3",
      value: "3",
    },
  ];
</script>

<div class="p-lg flex flex-col gap-y-md">
  <h1 class="text-3xl mb-md font-black">SevissUI</h1>
  <hr />
  <div>
    <h3 class={labelClass}>Default</h3>
    <Collapse bind:open>
      <Button slot="open">Collapse</Button>
      <Button slot="closed">Close</Button>
      <div slot="content">
        {#each items as item}
          <Button>{item.label}</Button>
        {/each}
      </div>
    </Collapse>
  </div>
</div>
