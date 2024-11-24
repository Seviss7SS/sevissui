<script lang="ts">
  import cx from "classnames";

  export let progress: number = 0;
  export let color: string = "progress-primary";
  export let size: string = "progress-md";
  export let background: string = "progress-bg-gray-lightest";
  export let radius: string = "rounded-full";

  $: progressFillClass = cx("progress-fill", {
    [radius]: radius,
  });
</script>

<div
  class={cx("progress w-full rounded-full", {
    [color]: color,
    [size]: size,
    [background]: background,
    [$$props.class]: Boolean($$props.class),
  })}
>
  <div class={progressFillClass} style="width: {progress}%"></div>
</div>
