<script>
  import cx from "classnames";
  import Card from "$lib/components/Card/Card.svelte";

  export let imgSrc = "";
  export let imgAlt = "";

  const className = cx("p-0", {
    [$$props.class]: $$props.class,
  });
</script>

<Card {...$$props} class={className}>
  <div class="flex h-full">
    <img src={imgSrc} alt={imgAlt} class="h-full w-auto" />
    <div class="flex-1">
      <slot name="content" />
    </div>
  </div>
</Card>
