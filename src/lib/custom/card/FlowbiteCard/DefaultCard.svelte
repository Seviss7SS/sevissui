<script lang="ts">
  import cx from "classnames";
  import Card from "$lib/components/Card/Card.svelte";

  export let title = "";

  const className = cx("", {
    [$$props.class]: $$props.class,
  });
</script>

<Card {...$$props} class={className}>
  <h5 class="card-header mb-sm text-2xl font-bold tracking-tight">
    {title}
  </h5>
  <slot />
</Card>
