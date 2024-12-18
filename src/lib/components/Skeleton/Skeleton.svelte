<script lang="ts">
  import cx from "classnames";
  import type { SkeletonProps } from "./types.ts";

  const {
    children,
    radius = "",
    bgColor = "bg-gray",
    skeleton = true,
    class: _class = "",
  }: SkeletonProps = $props();
</script>

{#if skeleton}
  <div
    class={cx("animate-pulse", {
      [radius]: radius,
      [bgColor]: bgColor,
      [_class]: _class,
    })}
  >
    <div class="invisible">
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
{:else if children}
  {@render children()}
{/if}
