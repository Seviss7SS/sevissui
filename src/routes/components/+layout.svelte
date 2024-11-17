<script>
  import cx from "classnames";
  import Button from "$lib/components/Button/Button.svelte";

  let light = true;

  // TODO: implement light / dark mode toggle

  $: containerClass = cx("h-full", {
    "bg-gray-darkest dark text-white": !light,
  });
</script>

<div class={containerClass}>
  <Button
    onClick={() => {
      light = !light;
    }}
  >
    {#if light}
      Switch to dark
    {:else}
      Switch to light
    {/if}
  </Button>
  <slot></slot>
</div>
