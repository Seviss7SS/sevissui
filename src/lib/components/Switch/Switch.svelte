<script lang="ts">
  import type { ChangeEventHandler } from "svelte/elements";
  import cx from "classnames";

  export let disabled: boolean = false;
  export let label: string = "";
  export let checked: boolean = false;
  export let color: string = "switch-primary";
  export let onChange: ChangeEventHandler<HTMLInputElement> = () => {};

  $: labelClass = cx("switch inline-flex items-center cursor-pointer", {
    [color]: color,
    [$$props.class]: $$props.class,
  });
</script>

<label class={labelClass}>
  <input
    {disabled}
    bind:checked
    type="checkbox"
    value=""
    class="sr-only peer"
    on:change={onChange}
  />
  {#if !$$slots.active && !$$slots.inactive}
    <div
      class="switch-toggle w-11 h-6 peer-focus:ring-4 peer-focus:ring-primary-lighter peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:transition-all"
    ></div>
  {/if}
  <slot name="active"></slot>
  <slot name="inactive"></slot>
  {#if label}
    <span class="ms-md text-sm font-medium text-gray-darkest">{label}</span>
  {/if}
</label>
