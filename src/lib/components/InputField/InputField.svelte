<script lang="ts">
  import cx from "classnames";

  import type { InputFieldProps } from "./types.ts";

  export let id: InputFieldProps["id"] = undefined;
  export let type: InputFieldProps["type"] = undefined;
  export let name: InputFieldProps["name"] = undefined;
  export let required: InputFieldProps["required"] = false;
  export let readonly: InputFieldProps["readonly"] = false;
  export let placeholder: InputFieldProps["placeholder"] = undefined;
  export let label: InputFieldProps["label"] = undefined;
  export let variant: InputFieldProps["variant"] = "input-primary-light";
  export let radius: InputFieldProps["radius"] = "rounded";
  export let align: InputFieldProps["align"] = "text-left";
  export let value: InputFieldProps["value"] = "";
  export let centered: InputFieldProps["centered"] = false;
  export let onChange: InputFieldProps["onChange"] = () => {};
  export let onInput: InputFieldProps["onInput"] = (e) => {
    value = e.currentTarget.value;
  };

  $: inputClass = cx("outline-none", {
    [align]: align,
  });
  $: inputGroupClass = cx(
    "input-group flex relative items-center overflow-hidden focus-within:ring-1",
    {
      [radius]: radius,
    }
  );
  $: leftClass = cx("items-center", {
    flex: $$slots.left,
    hidden: !$$slots.left && !centered && $$slots.right,
    invisible: centered && $$slots.right,
  });
  $: rightClass = cx("items-center", {
    hidden: !$$slots.right && !centered && $$slots.left,
    invisible: centered && $$slots.left,
  });
</script>

<div
  class={cx("input-field dark:input-field-dark", {
    [variant]: variant,
    [$$props.class]: $$props.class,
  })}
>
  {#if label}
    <label for={name || id}>{label}</label>
  {/if}
  <div class={inputGroupClass}>
    <div class={leftClass}>
      <slot name="left">
        <slot name="right" />
      </slot>
    </div>
    <input
      {id}
      {name}
      {required}
      {placeholder}
      {readonly}
      {value}
      {type}
      class={inputClass}
      on:change={onChange}
      on:input={onInput}
    />
    <div class={rightClass}>
      <slot name="right">
        <slot name="left" />
      </slot>
    </div>
  </div>
</div>
