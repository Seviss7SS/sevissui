<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import cx from "classnames";

  export let triggerClass: string = "";

  $: contentClass = cx(
    "z-10 bg-white divide-y divide-gray-lightest rounded-lg shadow w-44 overflow-hidden",
    {
      [$$props.class]: $$props.class,
    }
  );
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger class={triggerClass}>
    <slot />
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class={contentClass} sideOffset={8}>
    <slot name="content" />
  </DropdownMenu.Content>
</DropdownMenu.Root>
