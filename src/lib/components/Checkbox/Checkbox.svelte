<script lang="ts">
  import { Checkbox, Label } from "bits-ui";

  import Check from "$lib/icons/Check.svelte";
  import Minus from "$lib/icons/Minus.svelte";

  export let label: string = "";
  export let id: string | undefined = undefined;
  export let disabled: boolean = false;
  export let checked: boolean | "indeterminate" = false;
  export let onChange: (isChecked: typeof checked) => void = () => {};
</script>

<div class="flex items-center space-x-3">
  <Checkbox.Root
    {id}
    {disabled}
    class="peer inline-flex size-[25px] items-center justify-center rounded border border-muted bg-foreground transition-all duration-150 ease-in-out active:scale-98 data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-background data-[state=unchecked]:hover:border-dark-40"
    bind:checked
    onCheckedChange={onChange}
  >
    <Checkbox.Indicator
      let:isChecked
      let:isIndeterminate
      class="inline-flex items-center justify-center text-background"
    >
      {#if isChecked}
        <Check class="size-[15px]" />
      {:else if isIndeterminate}
        <Minus class="size-[15px]" />
      {/if}
    </Checkbox.Indicator>
  </Checkbox.Root>
  {#if label}
    <Label.Root
      id="terms-label"
      for="terms"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {label}
    </Label.Root>
  {/if}
</div>
