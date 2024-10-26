<script>
  import cx from "classnames";

  export let progress = 0;
  export let dark = false;
  export let className = "";
</script>

<div
  class={cx("w-full rounded-full h-2.5", {
    "bg-gray-700": dark,
    "bg-gray-200": !dark,
    [className]: Boolean(className),
  })}
>
  <div class="bg-blue-600 h-2.5 rounded-full" style="width: {progress}%"></div>
</div>
