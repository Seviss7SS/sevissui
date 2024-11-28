<script lang="ts">
  import { Collapsible } from "bits-ui";
  import { slide } from "svelte/transition";

  export let open: boolean = false;
</script>

<Collapsible.Root class={$$props.class} bind:open>
  <Collapsible.Trigger class="w-full">
    {#if !$$slots.open && !$$slots.closed}
      <slot />
    {:else if open}
      <slot name="open" />
    {:else}
      <slot name="closed" />
    {/if}
  </Collapsible.Trigger>

  <Collapsible.Content transition={slide}>
    <slot name="content" />
  </Collapsible.Content>
</Collapsible.Root>
