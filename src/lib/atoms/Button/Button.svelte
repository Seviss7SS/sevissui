<script lang="ts">
  import cx from "classnames";

  import { BUTTON, type ComponentTheme } from "$lib/config.js";

  export let variant: keyof typeof BUTTON.variants = "filled";
  export let label = "";
  export let loading = false;
  export let skeleton = false;
  export let disabled = false;
  export let type: "button" | "submit" | "reset" | null | undefined = "button";
  export let color: string = "primary";
  export let className = "";
  export let theme: ComponentTheme = "base";
  export let href = "";
  export let roundedClass = "rounded-lg";
  export let colorClass = "";

  const generateColorClass = () => {
    if (!color) return "";

    const colorStr = color.toString();

    let textColorClass = "";
    let bgColorClass = "bg-transparent";
    let borderClass = "";

    if (variant === "filled") {
      if (theme === "dark") {
        textColorClass = `text-${colorStr}-contrast`;
        bgColorClass = `bg-${colorStr}-dark hover:brightness-90 active:brightness-80`;
      } else if (theme === "light") {
        textColorClass = `bg-${colorStr}-dark`;
        bgColorClass = `bg-${colorStr}-light hover:brightness-90 active:brightness-80`;
      } else {
        textColorClass = `text-${colorStr}-contrast`;
        bgColorClass = `bg-${colorStr}-base hover:brightness-90 active:brightness-80`;
      }
    }

    if (variant === "outlined") {
      textColorClass = `text-${colorStr}-${theme}`;
      borderClass = `border-${colorStr}-${theme}`;
      bgColorClass = `hover:brightness-90 active:brightness-80 bg-white`;
    }

    if (variant === "subtle") {
      textColorClass = `text-${colorStr}-${theme}`;

      if (theme === "light") {
        bgColorClass = `hover:bg-${colorStr}-dark active:brightness-110`;
      } else {
        bgColorClass = `hover:bg-${colorStr}-light active:brightness-90`;
      }
    }

    if (variant === "text") {
      textColorClass = `text-${colorStr}-${theme}`;
    }

    return cx("", {
      [textColorClass]: textColorClass,
      [bgColorClass]: bgColorClass,
      [borderClass]: borderClass,
    });
  };

  $: btnClass = cx(
    "btn font-medium text-sm px-5 py-2.5 focus:outline-none filter",
    {
      [variant]: variant,
      [roundedClass]: roundedClass,
      [colorClass]: colorClass,
      [generateColorClass()]: !colorClass,
      [className]: className,
    }
  );
</script>

{#if href && !disabled}
  <a {href} class={btnClass}>
    <slot>{label}</slot>
  </a>
{:else}
  <button {disabled} {type} class={btnClass}>
    <slot>{label}</slot>
  </button>
{/if}

<style scoped lang="postcss">
  .btn {
    /* States */
    &:disabled {
      cursor: default;
    }

    /* Variants */

    &.outlined {
      border-width: 1px;
      border-style: solid;
    }

    &.subtle {
      background-color: transparent;
    }

    &.text {
      background-color: transparent;
    }

    /* State Overrides */
    &.filled {
      &:disabled {
        background-color: theme(colors.disabled.light);
        color: theme(colors.disabled.dark);

        &:hover {
          background-color: theme(colors.disabled.light);
        }
      }
    }
  }
</style>
