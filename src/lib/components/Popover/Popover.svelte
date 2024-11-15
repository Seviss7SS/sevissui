<script lang="ts">
  import { Popover } from "bits-ui";
</script>

<Popover.Root>
  <Popover.Trigger class={$$props.class}>
    <slot />
  </Popover.Trigger>
  <Popover.Content
    class="z-30 w-full max-w-[328px] rounded-[12px] border border-dark-10 bg-background p-4 shadow-popover"
    sideOffset={8}
  >
    <slot name="content" />
  </Popover.Content>
</Popover.Root>
