<script lang="ts">
  import { Combobox, type Selected } from "bits-ui";
  import cx from "classnames";
  import ChevronRight from "$lib/icons/ChevronRight.svelte";
  import Check from "$lib/icons/Check.svelte";

  export let items: { value: string; label: string }[] = [];
  export let inputValue: string = "";
  export let name: string = "";
  export let placeholder: string = "";
  export let disabled: boolean = false;
  export let multiple: boolean = false;
  export let onChange: (
    selected: Selected<string> | Selected<string>[] | undefined
  ) => void = () => {};

  let touchedInput = false;

  $: filteredItems =
    inputValue && touchedInput
      ? items.filter((item) => item.value.includes(inputValue.toLowerCase()))
      : items;

  $: inputClass = cx(
    "relative input-field dark:input-field-dark bg-white dark:bg-gray-darker",
    {
      [$$props.class]: $$props.class,
    }
  );
</script>

<Combobox.Root
  {items}
  {disabled}
  {multiple}
  bind:inputValue
  bind:touchedInput
  onSelectedChange={onChange}
>
  <div class={inputClass}>
    <Combobox.Input
      {placeholder}
      class="border border-gray dark:border-gray-dark"
    />
    <ChevronRight
      class="absolute end-md top-1/2 size-6 -translate-y-1/2 text-gray-lightest transform rotate-90"
    />
  </div>

  <Combobox.Content
    class="w-full rounded-xl border border-solid border-gray-lightest py-md shadow outline-none bg-white dark:bg-gray-darker dark:text-white"
    sideOffset={8}
  >
    {#each filteredItems as item (item.value)}
      <Combobox.Item
        class="flex h-10 w-full select-none items-center rounded-button py-md pl-xl pr-sm text-sm capitalize outline-none transition-all duration-75 data-[highlighted]:bg-gray-lightest data-[highlighted]:bg-opacity-25 cursor-pointer"
        value={item.value}
        label={item.label}
      >
        {item.label}
        <Combobox.ItemIndicator class="ml-auto" asChild={false}>
          <Check />
        </Combobox.ItemIndicator>
      </Combobox.Item>
    {:else}
      <span class="block px-lg py-sm text-sm text-gray-lightest">
        No results found
      </span>
    {/each}
  </Combobox.Content>
  <Combobox.HiddenInput {name} />
</Combobox.Root>
