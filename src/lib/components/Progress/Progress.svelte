<script lang="ts">
  import cx from "classnames";

  export let progress: number = 0;
  export let color: string = "progress-primary";
  export let size: string = "progress-md";
  export let background: string = "progress-bg-gray-lightest";
  export let radius: string = "rounded-full";

  $: progressClass = cx("progress w-full", {
    [color]: color,
    [size]: size,
    [radius]: radius,
    [background]: background,
    [$$props.class]: Boolean($$props.class),
  });

  $: progressFillClass = cx("progress-fill", {
    [radius]: radius,
  });
</script>

<div class={progressClass}>
  <div class={progressFillClass} style="width: {progress}%"></div>
</div>
