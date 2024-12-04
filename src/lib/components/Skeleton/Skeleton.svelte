<script lang="ts">
  import cx from "classnames";

  export let radius: string = "";
  export let bgColor: string = "bg-gray";
  export let skeleton: boolean = true;
</script>

{#if skeleton}
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
{:else}
  <slot />
{/if}
