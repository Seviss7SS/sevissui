<script lang="ts">
  import { Collapsible } from "bits-ui";
  import { slide } from "svelte/transition";

  interface CollapseProps {
    class?: string;
    open?: boolean;
    triggerContent?: any;
    children?: any;
    openContent?: any;
    closedContent?: any;
  }

  let {
    class: _class = "",
    open = $bindable(false),
    triggerContent,
    children,
    openContent,
    closedContent,
  }: CollapseProps = $props();
</script>

<Collapsible.Root class={_class} bind:open>
  <Collapsible.Trigger class="w-full">
    {#if !openContent && !closedContent && triggerContent}
      {@render triggerContent()}
    {:else if open && openContent}
      {@render openContent()}
    {:else if closedContent}
      {@render closedContent()}
    {/if}
  </Collapsible.Trigger>

  <Collapsible.Content transition={slide}>
    {#if children}
      {@render children()}
    {/if}
  </Collapsible.Content>
</Collapsible.Root>
