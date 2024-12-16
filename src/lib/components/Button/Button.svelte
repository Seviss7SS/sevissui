<script lang="ts">
  import Spinner from "$lib/icons/Spinner.svelte";
  import cx from "classnames";
  import type { ButtonProps } from "./types.ts";

  const {
    children,
    loader,
    label = "",
    loading = false,
    disabled = false,
    clickable = true,
    circle = false,
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

{#snippet content()}
  {#if !loading}
    {#if children}
      {@render children()}
    {:else}
      {label}
    {/if}
  {:else if loader}
    {@render loader()}
  {:else}
    <Spinner class="animate-spin text-gray h-6 w-6" />
  {/if}
{/snippet}

{#if href && !disabled}
  <a {...rest} {id} {href} {type} class={btnClass} onclick={onClick}>
    {@render content()}
  </a>
{:else}
  <button {...rest} {id} {disabled} {type} class={btnClass} onclick={onClick}>
    {@render content()}
  </button>
{/if}
