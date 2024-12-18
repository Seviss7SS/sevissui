<script lang="ts">
  import cx from "classnames";
  import type { BoxProps } from "./types.ts";
  import Skeleton from "$lib/components/Skeleton/Skeleton.svelte";

  const {
    children,
    class: _class = "",
    loading = false,
    onClick,
    href,
    disabled,
    id,
    type,
    radius,
    clickable,
  }: BoxProps = $props();

  const className = $derived(
    cx("box", {
      radius: radius,
      clickable: (onClick || href || clickable) && !disabled,
      [_class]: _class,
    })
  );
</script>

<Skeleton skeleton={loading} {radius}>
  {#if href && !disabled}
    <a {id} {href} class={className}>
      {#if children}
        {@render children()}
      {/if}
    </a>
  {:else if onClick || clickable}
    <button {id} {type} onclick={onClick} class={className} {disabled}>
      {#if children}
        {@render children()}
      {/if}
    </button>
  {:else}
    <div {id} class={className}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  {/if}
</Skeleton>
