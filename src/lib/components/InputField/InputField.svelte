<script lang="ts">
  import cx from "classnames";

  import type { InputFieldProps } from "./types.ts";

  export let inputType: InputFieldProps["inputType"] = "text";
  export let id: InputFieldProps["id"] = undefined;
  export let name: InputFieldProps["name"] = undefined;
  export let required: InputFieldProps["required"] = false;
  export let placeholder: InputFieldProps["placeholder"] = undefined;
  export let label: InputFieldProps["label"] = undefined;
  export let variant: InputFieldProps["variant"] = "input-primary-light";
  export let radius: InputFieldProps["radius"] = "rounded";
  export let align: InputFieldProps["align"] = "text-left";

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
