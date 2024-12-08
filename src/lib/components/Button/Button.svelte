<script lang="ts">
  import Spinner from "$lib/icons/Spinner.svelte";
  import cx from "classnames";
  import type { ButtonProps } from "./types.ts";

  const {
    children,
    label = "",
    loading = false,
    disabled = false,
    clickable = true,
    circle = true,
    type = "button",
    href = "",
    radius = "rounded",
    variant = "btn-filled-primary",
    size = "btn-md",
    id = undefined,
    onClick = undefined,
    class: _class = "",
    ...rest
  }: ButtonProps = $props();

  const isClickable = $derived(clickable && !disabled && !loading);
  const btnClass = $derived(
    cx(
      "btn font-medium focus:outline-none filter block text-center overflow-hidden select-none",
      {
        [radius]: radius,
        [size]: size,
        [variant]: variant,
        "btn-circle": circle,
        "enabled:hover:opacity-75 enabled:active:opacity-50 cursor-pointer":
          isClickable,
        "pointer-events-none": !isClickable,
        [_class]: _class,
      }
    )
  );
</script>

{#if href && !disabled}
  <a {...rest} {id} {href} {type} class={btnClass} onclick={onClick}>
    {#if !loading}
      <slot>{label}</slot>
    {:else}
      <slot name="loader"
        ><Spinner class="animate-spin text-gray h-6 w-6" /></slot
      >
    {/if}
  </a>
{:else}
  <button {...rest} {id} {disabled} {type} class={btnClass} onclick={onClick}>
    {#if loading}
      <slot name="loader"
        ><Spinner class="animate-spin text-gray h-6 w-6" /></slot
      >
    {:else}
      <slot>{label}</slot>
    {/if}
  </button>
{/if}
