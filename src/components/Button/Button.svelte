<script lang="ts">
  import cx from "classnames";
  import { BUTTON } from "$lib/config";

  export let variant: keyof typeof BUTTON.variants = "filled";
  export let label = "";
  export let loading = false;
  export let skeleton = false;
  export let type: "button" | "submit" | "reset" | null | undefined = "button";
  export let color: keyof typeof BUTTON.colors = "primary";
  export let className = "";

  $: btnClass = cx("btn", {
    [color]: color,
    [variant]: variant,
    [className]: className,
  });
</script>

<button {type} class={btnClass}>
  <slot>{label}</slot>
</button>

<style scoped>
</style>
