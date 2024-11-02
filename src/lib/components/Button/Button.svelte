<script lang="ts">
  import cx from "classnames";

  import { BUTTON, type ComponentTheme } from "$lib/config.js";

  export let variant: keyof typeof BUTTON.variants = "filled";
  export let label = "";
  export let loading = false;
  export let skeleton = false;
  export let disabled = false;
  export let type: "button" | "submit" | "reset" | undefined = "button";
  export let color: string = "primary";
  export let className = "";
  export let theme: ComponentTheme = "base";
  export let href: string = "";
  export let roundedClass = "rounded-lg";
  export let colorClass = "";
  export let size = "md";
  export let id: string | undefined = undefined;

  const generateColorClass = () => {
    if (!color) return "";

    const colorStr = color.toString();

    let textColorClass = "";
    let bgColorClass = "bg-transparent";
    let borderClass = "";

    if (variant === "filled") {
      if (theme === "dark") {
        textColorClass = `text-${colorStr}-contrast`;
        bgColorClass = `bg-${colorStr}-dark hover:brightness-125 active:brightness-200`;
      } else if (theme === "light") {
        textColorClass = `bg-${colorStr}-dark`;
        bgColorClass = `bg-${colorStr}-light hover:brightness-125 active:brightness-200`;
      } else {
        textColorClass = `text-${colorStr}-contrast`;
        bgColorClass = `bg-${colorStr}-base hover:brightness-125 active:brightness-200`;
      }
    }

    if (variant === "outlined") {
      textColorClass = `text-${colorStr}-${theme}`;
      borderClass = `border-${colorStr}-${theme}`;
      bgColorClass = `hover:brightness-125 active:brightness-200 bg-white`;
    }

    if (variant === "subtle") {
      textColorClass = `text-${colorStr}-${theme}`;

      if (theme === "light") {
        bgColorClass = `hover:bg-${colorStr}-dark active:brightness-125`;
      } else {
        bgColorClass = `hover:bg-${colorStr}-light active:brightness-125`;
      }
    }

    if (variant === "text") {
      textColorClass = `text-${colorStr}-${theme}`;

      if (theme === "dark") {
        textColorClass = `${textColorClass} hover:brightness-125 active:brightness-200`;
      } else if (theme === "light") {
        textColorClass = `${textColorClass} hover:brightness-90 active:brightness-50`;
      } else {
        textColorClass = `${textColorClass} hover:brightness-125 active:brightness-200`;
      }
    }

    if (disabled) {
      bgColorClass = "";
    }

    return cx("", {
      [textColorClass]: textColorClass,
      [bgColorClass]: bgColorClass,
      [borderClass]: borderClass,
    });
  };

  const generateSizeClass = () => {
    if (size === "xs") {
      return "px-3 py-2 text-xs";
    } else if (size === "sm") {
      return "px-3 py-2 text-sm";
    } else if (size === "md") {
      return "px-5 py-2.5 text-sm";
    } else if (size === "lg") {
      return "px-5 py-3 text-base";
    } else if (size === "xl") {
      return "px-6 py-3.5 text-base";
    }

    return "";
  };

  $: btnClass = cx(
    "btn font-medium focus:outline-none filter block text-center",
    {
      [variant]: variant,
      [roundedClass]: roundedClass,
      [colorClass]: colorClass,
      [generateColorClass()]: !colorClass,
      [generateSizeClass()]: generateSizeClass(),
      [className]: className,
    }
  );
</script>

{#if href && !disabled}
  <a {id} {href} {type} class={btnClass}>
    <slot>{label}</slot>
  </a>
{:else}
  <button {id} {disabled} {type} class={btnClass}>
    <slot>{label}</slot>
  </button>
{/if}