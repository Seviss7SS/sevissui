<script lang="ts">
  import cx from "classnames";
  import type { BoxProps } from "./types.js";
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
    method,
    target,
    action,
  }: BoxProps = $props();

  const className = $derived(
    cx("box", {
      radius: radius,
      clickable: (onClick || href || clickable) && !disabled,
      [_class]: _class,
    })
  );

  const _onClick = disabled ? undefined : onClick;
</script>

<Skeleton skeleton={loading} {radius}>
  {#if href && !disabled}
    <a {id} {target} {href} class={className} onclick={_onClick}>
      {#if children}
        {@render children()}
      {/if}
    </a>
  {:else if method && action}
    <form {id} {method} {action} class={className} onclick={_onClick}>
      {#if children}
        {@render children()}
      {/if}
    </form>
  {:else}
    <div {id} class={className} onclick={_onClick}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  {/if}
</Skeleton>
