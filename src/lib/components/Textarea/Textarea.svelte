<script lang="ts">
  import cx from "classnames";
  import type { ChangeEventHandler } from "svelte/elements";

  export let value: string = "";
  export let id: string | undefined = undefined;
  export let name: string | undefined = undefined;
  export let placeholder: string = "";
  export let rows: number | string | undefined = "4";
  export let label: string = "";
  export let containerClass: string = "";
  export let onChange: ChangeEventHandler<HTMLTextAreaElement> = () => {};

  $: className = cx("textarea outline-none focus:ring-1", {
    [$$props.class]: $$props.class,
  });

  $: containerClassName = cx("textarea-field", {
    [containerClass]: containerClass,
  });
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
    on:change={onChange}
  />
</div>
