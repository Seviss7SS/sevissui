<script lang="ts">
  import cx from "classnames";
  import Card from "$lib/components/Card/Card.svelte";

  export let imgSrc = "";
  export let imgAlt = "";
  export let vertical = false;

  const className = cx("p-0", {
    [$$props.class]: $$props.class,
  });
</script>

<Card {...$$props} class={className}>
  <div
    class={cx("flex", {
      "flex-col w-full": vertical,
      "h-full": !vertical,
    })}
  >
    <img src={imgSrc} alt={imgAlt} class="h-full w-auto" />
    <div class="flex-1">
      <slot />
    </div>
  </div>
</Card>
