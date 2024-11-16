<script lang="ts">
  import cx from "classnames";
  import { Popover } from "bits-ui";
  import type {
    PopoverProps,
    PopoverContentProps,
    PopoverTriggerProps,
  } from "bits-ui";

  export let contentClass: string = "";
  export let offset: number = 8;
  export let fullWidth: boolean = true;

  export let bitsRootProps: PopoverProps = {};
  export let bitsContentProps: PopoverContentProps = {};
  export let bitsTriggerProps: PopoverTriggerProps = {};

  $: _contentClass = cx("z-30 w-full", {
    [contentClass]: contentClass,
  });
</script>

<Popover.Root {...bitsRootProps}>
  <Popover.Trigger class={$$props.class} {...bitsTriggerProps}>
    <slot />
  </Popover.Trigger>
  <Popover.Content
    class={_contentClass}
    sideOffset={offset}
    sameWidth={fullWidth}
    {...bitsContentProps}
  >
    <slot name="content" />
  </Popover.Content>
</Popover.Root>
