<script lang="ts">
  import cx from "classnames";
  import type { HTMLInputTypeAttribute } from "svelte/elements";

  export let inputType: HTMLInputTypeAttribute | null | undefined = "text";
  export let id: string | undefined = undefined;
  export let name: string | undefined = undefined;
  export let required: boolean = false;
  export let placeholder: string | undefined = undefined;
  export let label: string | undefined = undefined;
  export let variant: string = "input-primary-base";
</script>

<div class={cx("", { [variant]: variant, [$$props.class]: $$props.class })}>
  {#if label}
    <label
      for={name || id}
      class={cx("block mb-2 text-sm font-medium text-gray-900 ring-white")}
      >{label}</label
    >
  {/if}
  <input
    {id}
    {name}
    {required}
    {placeholder}
    type={inputType}
    class="input outline-none focus:ring"
  />
</div>
