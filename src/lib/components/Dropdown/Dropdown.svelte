<script lang="ts">
  import { DropdownMenu } from "bits-ui";

  import DropdownItem from "./DropdownItem.svelte";

  export let DropdownItemComponent: any = DropdownItem;
  export let dropdownItems: any[] = [];
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <slot />
  </DropdownMenu.Trigger>
  <DropdownMenu.Content
    class="w-full max-w-[229px] rounded border px-xs py-sm shadow"
    sideOffset={8}
  >
    {#each dropdownItems as dropdownItem}
      <svelte:component this={DropdownItemComponent} {...dropdownItem} />
    {/each}
  </DropdownMenu.Content>
</DropdownMenu.Root>
