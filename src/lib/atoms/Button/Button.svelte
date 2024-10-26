<script lang="ts">
  import cx from "classnames";
  import { BUTTON } from "$lib/config";

  export let variant: keyof typeof BUTTON.variants = "filled";
  export let label = "";
  export let loading = false;
  export let skeleton = false;
  export let disabled = false;
  export let type: "button" | "submit" | "reset" | null | undefined = "button";
  export let color: keyof typeof BUTTON.colors = "primary";
  export let className = "";
  export let dark = false;
  export let href = "";

  $: btnClass = cx("btn", {
    [color]: color,
    [variant]: variant,
    [className]: className,
    dark: dark,
  });
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
