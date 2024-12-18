<script lang="ts">
  import cx from "classnames";
  import Box from "$lib/components/Box/Box.svelte";

  const {
    children = null,
    href = "",
    onClick = null,
    class: _class = "",
  } = $props();

  const cardClass = $derived(
    cx("card dark:card-dark shadow filter", {
      [_class]: _class,
    })
  );
</script>

<Box {onClick} {href} class={cardClass}>
  {#if children}
    {@render children()}
  {/if}
</Box>
