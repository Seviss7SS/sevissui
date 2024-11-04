<script>
  import cx from "classnames";

  export let progress = 0;
  export let dark = false;
  export let color = "primary";
</script>

<div
  class={cx("w-full rounded-full h-2.5", {
    "bg-gray-700": dark,
    "bg-gray-200": !dark,
    [$$props.class]: Boolean($$props.class),
  })}
>
  <div
    class={`bg-${color}-600 h-2.5 rounded-full`}
    style="width: {progress}%"
  ></div>
</div>
