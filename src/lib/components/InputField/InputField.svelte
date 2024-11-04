<script lang="ts">
  import cx from "classnames";
  import type { HTMLInputTypeAttribute } from "svelte/elements";

  export let inputType: HTMLInputTypeAttribute | null | undefined = "text";
  export let id: string | undefined = undefined;
  export let name: string | undefined = undefined;
  export let required: boolean = false;
  export let placeholder: string | undefined = undefined;
  export let label: string | undefined = undefined;
  export let variant: string = "input-primary-light";
</script>

<div
  class={cx("input-field", {
    [variant]: variant,
    [$$props.class]: $$props.class,
  })}
>
  {#if label}
    <label for={name || id}>{label}</label>
  {/if}
  <input
    {id}
    {name}
    {required}
    {placeholder}
    type={inputType}
    class="outline-none focus:ring"
  />
</div>
