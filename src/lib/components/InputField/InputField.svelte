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
  export let radius: string = "rounded-full";
  export let align: string = "text-left";

  $: inputClass = cx("outline-none", {
    [align]: align,
  });
  $: inputGroupClass = cx(
    "input-group flex items-center relative overflow-hidden focus-within:ring",
    {
      [radius]: radius,
    }
  );
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
  <div class={inputGroupClass}>
    <div class="flex items-center h-full pl-sm">
      <slot name="left" />
    </div>
    <input
      {id}
      {name}
      {required}
      {placeholder}
      type={inputType}
      class={inputClass}
    />
    <slot name="right" />
  </div>
</div>
