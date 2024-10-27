<script>
  import cx from "classnames";
  import Card from "$lib/atoms/Card/Card.svelte";

  export let imgSrc = "";
  export let imgAlt = "";
  export let className = "";
  export let title = "";
  export let dark = false;
  export let clickable = false;
</script>

<Card paddingClass="p-0" {clickable} {className}>
  <div class="flex h-full">
    <img src={imgSrc} alt={imgAlt} class="h-full w-auto" />
    <div class="p-6 flex-1">
      {#if title}
        <h5
          class={cx("mb-2 text-2xl font-bold tracking-tight", {
            "text-gray-700": !dark,
            "text-white": dark,
          })}
        >
          {title}
        </h5>
      {/if}
      <div
        class={cx("font-normal leading-tight", {
          "text-gray-400": dark,
          "text-gray-700": !dark,
        })}
      >
        <slot />
      </div>
    </div>
  </div>
</Card>
