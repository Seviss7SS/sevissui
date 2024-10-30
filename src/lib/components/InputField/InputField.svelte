<script lang="ts">
  import type { ComponentTheme } from "$lib/config.ts";
  import cx from "classnames";
  import type { HTMLInputTypeAttribute } from "svelte/elements";

  export let inputType: HTMLInputTypeAttribute | null | undefined = "text";
  export let id: string | undefined = undefined;
  export let name: string | undefined = undefined;
  export let required: boolean = false;
  export let placeholder: string | undefined = undefined;
  export let theme: ComponentTheme = "base";
  export let label: string | undefined = undefined;
  export let color: string = "primary";

  const generateColorClass = () => {
    if (theme === "dark") {
      return `focus:border-${color}-base bg-gray-dark border-gray-base placeholder-gray-light text-white`;
    } else {
      return `focus:border-${color}-base bg-white border-gray-light text-gray-dark`;
    }
  };
</script>

<div class={cx("", { [theme]: theme })}>
  {#if label}
    <label
      for={name || id}
      class={cx("block mb-2 text-sm font-medium text-gray-900", {
        "text-white": theme === "dark",
      })}>{label}</label
    >
  {/if}
  <input
    {id}
    {name}
    {required}
    {placeholder}
    type={inputType}
    class={cx("border text-sm rounded-lg block w-full p-2.5", {
      [generateColorClass()]: true,
    })}
  />
</div>
