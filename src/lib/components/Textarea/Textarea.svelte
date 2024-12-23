<script lang="ts">
  import cx from "classnames";
  import type { TextareaProps } from "./types";

  let {
    value = $bindable(""),
    id,
    name,
    placeholder,
    rows = "4",
    label,
    class: _class = "",
    containerClass = "",
    onChange,
    onInput,
  }: TextareaProps = $props();

  const className = $derived(
    cx("textarea outline-none focus:ring-1", {
      [_class]: _class,
    })
  );

  const containerClassName = $derived(
    cx("textarea-field", {
      [containerClass]: containerClass,
    })
  );
</script>

<div class={containerClassName}>
  {#if label}
    <label for={name || id} class="block mb-xs text-sm font-medium"
      >{label}</label
    >
  {/if}
  <textarea
    {id}
    {name}
    {placeholder}
    class={className}
    rows={typeof rows === "string" ? parseInt(rows) : rows}
    bind:value
    onchange={onChange}
    oninput={onInput}
  ></textarea>
</div>
