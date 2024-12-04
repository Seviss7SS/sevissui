<script lang="ts">
  import cx from "classnames";

  export let radius: string = "";
  export let bgColor: string = "bg-gray";
</script>

<div
  class={cx("animate-pulse", {
    [radius]: radius,
    [bgColor]: bgColor,
    [$$props.class]: $$props.class,
  })}
>
  <div class="invisible">
    <slot />
  </div>
</div>
