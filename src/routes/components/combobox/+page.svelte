<script lang="ts">
  import Combobox from "$lib/components/Combobox/Combobox.svelte";

  const labelClass = "text-xl mb-sm font-bold";

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

  let value: string | undefined = "";
</script>

<div class="p-lg flex flex-col gap-y-md">
  <h1 class="text-3xl mb-md font-black">Flowbite</h1>
  <hr />
  <div>
    <h3 class={labelClass}>Default</h3>
    <div>Value: {value}</div>
    <Combobox {items} onChange={(selected) => (value = selected.value)} />
  </div>
</div>
