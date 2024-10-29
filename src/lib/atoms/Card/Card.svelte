<script lang="ts">
  import type { ComponentTheme } from "$lib/config.ts";
  import cx from "classnames";

  export let className = "";
  export let theme: ComponentTheme = "base";
  export let clickable = false;
  export let href = "";
  export let paddingClass = "p-6";
  export let colorClass: string = "";

  const generateColorClass = () => {
    let bgClass = "bg-white";
    let borderClass = "";

    if (theme === "dark") {
      bgClass = "bg-gray-dark";
      borderClass = "bg-gray-base";
    }

    return cx("", {
      [bgClass]: bgClass,
      [borderClass]: borderClass,
    });
  };

  const isClickable = Boolean(clickable || href);
</script>

<div
  class={cx(`card bg-white block rounded-lg shadow overflow-hidden`, {
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
    color: white;

    &.clickable {
      cursor: pointer;
      position: relative;

      &.dark {
        &:hover {
          background-color: theme("colors.gray.700");
        }
      }
    }

    &.dark {
      background-color: theme("colors.gray.800");
      border: 1px solid theme("colors.gray.700");
    }
  }
</style>
