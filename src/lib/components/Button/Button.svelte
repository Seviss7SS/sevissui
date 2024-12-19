<script lang="ts">
  import cx from "classnames";
  import type { ButtonProps } from "./types.js";
  import Box from "$lib/components/Box/Box.svelte";
  import Spinner from "$lib/icons/Spinner.svelte";

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
    variant = "btn-filled",
    color = "btn-primary",
    size = "btn-md",
    id = undefined,
    onClick = undefined,
    class: _class = "",
    ...rest
  }: ButtonProps = $props();

  const isClickable = $derived(clickable && !disabled && !loading);
  const btnClass = $derived(
    cx("btn", {
      [radius]: radius,
      [size]: size,
      [color]: color,
      [variant]: variant,
      "btn-circle": circle,
      [_class]: _class,
    })
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

<Box
  {...rest}
  {id}
  {href}
  {type}
  {disabled}
  class={btnClass}
  {onClick}
  clickable={isClickable}
>
  {@render content()}
</Box>
