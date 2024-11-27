<script lang="ts">
  import { Select, type SelectProps } from "bits-ui";
  import ChevronRight from "$lib/icons/ChevronRight.svelte";
  import Check from "$lib/icons/Check.svelte";

  export let items: { value: string; label: string }[] = [];
  export let name: string = "";
  export let placeholder: string = "";
  export let onChange: SelectProps<string>["onSelectedChange"];
</script>

<Select.Root {items} onSelectedChange={onChange}>
  <Select.Trigger class="w-full card border border-gray-lightest p-md flex">
    <Select.Value class="text-sm" {placeholder} />
    <ChevronRight class="ml-auto size-6 transform -rotate-90" />
  </Select.Trigger>
  <Select.Content
    class="w-full rounded-xl border px-xs py-md shadow outline-none"
    sideOffset={8}
  >
    {#each items as item}
      <Select.Item
        class="flex h-10 w-full select-none items-center rounded-button py-md pl-lg pr-sm text-sm outline-none transition-all duration-75 data-[highlighted]:bg-gray-lightest"
        value={item.value}
        label={item.label}
      >
        {item.label}
        <Select.ItemIndicator class="ml-auto" asChild={false}>
          <Check />
        </Select.ItemIndicator>
      </Select.Item>
    {/each}
  </Select.Content>
  <Select.Input {name} />
</Select.Root>
