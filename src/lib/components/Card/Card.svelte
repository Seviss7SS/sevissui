<script lang="ts">
  import cx from "classnames";
  import Box from "$lib/components/Box/Box.svelte";
  import type { CardProps } from "./types";

  const {
    children = null,
    href = "",
    onClick = undefined,
    class: _class = "",
    ...rest
  }: CardProps = $props();

  const cardClass = $derived(
    cx("card dark:card-dark shadow filter", {
      [_class]: _class,
    })
  );
</script>

<Box {...rest} {onClick} {href} class={cardClass}>
  {#if children}
    {@render children()}
  {/if}
</Box>
