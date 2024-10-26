<script>
  import cx from "classnames";

  export let className = "";
  export let dark = false;
  export let disablePadding = false;
</script>

<div
  class={cx("card", {
    dark: dark,
    [className]: className,
    "p-0": disablePadding,
  })}
>
  <slot />
</div>
