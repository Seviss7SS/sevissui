<script lang="ts">
  import cx from "classnames";
  import { BUTTON } from "$lib/config.js";

  export let variant: keyof typeof BUTTON.variants = "filled";
  export let label = "";
  export let loading = false;
  export let skeleton = false;
  export let disabled = false;
  export let type: "button" | "submit" | "reset" | null | undefined = "button";
  export let color: string = "primary";
  export let className = "";
  export let theme: string = "";
  export let href = "";
  export let roundedClass = "rounded-lg";

  const generateColorClass = () => {
    if (!color) return "";

    const colorStr = color.toString();
    const isWhite = color === "white";

    let textColorClass = "";
    let bgColorClass = "bg-transparent";
    let borderClass = "";

    if (theme === "dark" && color !== "white") {
      textColorClass = `text-${colorStr}-300`;
    }

    if (variant === "filled") {
      textColorClass = isWhite ? "" : "text-white";
      bgColorClass = `bg-${colorStr}-700 hover:bg-${colorStr}-800 active:bg-${colorStr}-600`;
    }

    if (variant === "outlined") {
      textColorClass = `text-${colorStr}-700`;
      borderClass = `border-${colorStr}-700`;
      bgColorClass = `hover:bg-${colorStr}-300 active:bg-${colorStr}-400 bg-white`;
    }

    if (variant === "subtle") {
      textColorClass = `text-${colorStr}-700`;
      bgColorClass = `hover:bg-${colorStr}-100 active:bg-${colorStr}-200`;
    }

    if (variant === "text") {
      textColorClass = `text-${colorStr}-700`;
    }

    return cx("", {
      [textColorClass]: textColorClass,
      [bgColorClass]: bgColorClass,
      [borderClass]: borderClass,
    });
  };

  $: btnClass = cx(
    `${theme} btn font-medium text-sm px-5 py-2.5 focus:outline-none ${generateColorClass()}`,
    {
      [variant]: variant,
      [roundedClass]: roundedClass,
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
        background-color: theme(colors.disabled.100);
        color: theme(colors.disabled.400);

        &:hover {
          background-color: theme(colors.disabled.100);
        }
      }
    }
  }
</style>
