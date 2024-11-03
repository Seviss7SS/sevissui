<script lang="ts">
  import cx from "classnames";

  export let clickable: boolean = false;
  export let href: string = "";
  export let padding: string = "p-xl";
  export let variant: string = "";

  const isClickable = Boolean(clickable || href);
</script>

<div
  class={cx("card shadow filter hover:brightness-90 active:brightness-75", {
    [padding]: padding,
    [variant]: variant,
    clickable: isClickable,
    [$$props.class]: $$props.class,
  })}
>
  <slot />
</div>
