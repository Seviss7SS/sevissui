<script>
  import cx from "classnames";

  export let className = "";
  export let dark = false;
  export let disablePadding = false;
  export let clickable = false;
  export let href = "";

  const isClickable = Boolean(clickable || href);
</script>

<div
  class={cx("card", {
    dark: dark,
    [className]: className,
    "p-0": disablePadding,
    clickable: isClickable,
  })}
>
  {#if isClickable}
    <div
      class="h-full w-full absolute hover:bg-black hover:bg-opacity-20 active:bg-opacity-30"
    />
  {/if}
  <slot />
</div>
