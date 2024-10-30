<script lang="ts">
  import type { ComponentTheme } from "$lib/config.ts";
  import cx from "classnames";

  export let className = "";
  export let theme: ComponentTheme = "base";
  export let clickable = false;
  export let href = "";
  export let paddingClass = "p-xl";
  export let colorClass: string = "";

  const generateColorClass = () => {
    let bgClass = "bg-white";
    let borderClass = "";
    let textClass = "";

    if (theme === "dark") {
      bgClass = "bg-gray-dark";
      borderClass = "border-gray-base";
      textClass = "text-gray-contrast";
    }

    return cx("", {
      [bgClass]: bgClass,
      [borderClass]: borderClass,
      [textClass]: textClass,
    });
  };

  const isClickable = Boolean(clickable || href);
</script>

<div
  class={cx(`card block rounded-lg shadow overflow-hidden`, {
    [paddingClass]: paddingClass,
    clickable: isClickable,
    [colorClass]: colorClass,
    [generateColorClass()]: !colorClass,
    [className]: className,
  })}
>
  {#if isClickable}
    <div
      class="h-full w-full absolute hover:bg-black hover:bg-opacity-20 active:bg-opacity-30"
    />
  {/if}
  <slot />
</div>

<style scoped lang="postcss">
  .card {
    &.clickable {
      cursor: pointer;
      position: relative;
    }
  }
</style>
