<script>
  import "../app.scss";
  import cx from "classnames";
  import Button from "$lib/components/Button/Button.svelte";

  let light = true;

  $: containerClass = cx("h-screen overflow-y-auto", {
    "bg-gray-darkest text-white": !light,
  });

  document.body.classList.add("test");

  $: light
    ? document.body.classList.remove("dark")
    : document.body.classList.add("dark");
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
