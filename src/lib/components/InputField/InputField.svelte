<script lang="ts">
  import cx from "classnames";
  import type { InputFieldProps } from "./types.ts";

  const {
    left,
    right,
    id,
    type,
    name,
    required = false,
    readonly = false,
    placeholder,
    label,
    variant = "input-primary-light",
    radius = "rounded",
    align = "text-left",
    class: _class = "",
    value = "",
    centered = false,
    error = "",
    onChange,
    onInput,
    onBlur,
  }: InputFieldProps = $props();

  const inputClass = $derived(
    cx("outline-none", {
      [align]: align,
    })
  );

  const inputGroupClass = $derived(
    cx(
      "input-group flex relative items-center overflow-hidden focus-within:ring-1",
      {
        [radius]: radius,
      }
    )
  );

  const leftClass = $derived(
    cx("items-center", {
      flex: left,
      hidden: !left && !centered && right,
      invisible: centered && right,
    })
  );

  const rightClass = $derived(
    cx("items-center", {
      hidden: !right && !centered && left,
      invisible: centered && left,
    })
  );
</script>

<div
  class={cx("input-field dark:input-field-dark", {
    [variant]: variant,
    "input-field-error": error,
    [_class]: _class,
  })}
>
  {#if label}
    <label for={name || id}>{label}</label>
  {/if}
  <div class={inputGroupClass}>
    <div class={leftClass}>
      {#if left}
        {@render left()}
      {:else if right}
        {@render right()}
      {/if}
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
      onchange={onChange}
      oninput={onInput}
      onblur={onBlur}
    />
    <div class={rightClass}>
      {#if right}
        {@render right()}
      {:else if left}
        {@render left()}
      {/if}
    </div>
  </div>
</div>
{#if error}
  <div class="text-error">{error}</div>
{/if}
