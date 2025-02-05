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
    component,
    ...rest
  }: BoxProps = $props();

  const className = $derived(
    cx("box", {
      radius: radius,
      clickable: (onClick || href || clickable || action) && !disabled,
      [_class]: _class,
    })
  );

  const _onClick = $derived.by(() => {
    if (disabled) return undefined;

    if (!onClick && action) {
      return (e: MouseEvent) => {
        (e.target as HTMLFormElement).submit();
      };
    }

    return onClick;
  });

  const _component = $derived.by(() => {
    if (component) return component;
    if (href && !disabled) return "a";
    if (method || action) return "form";
    return "div";
  });
</script>

{#snippet c(props: any)}
  {#if _component === "a"}
    <a {...props}>
      {#if children}
        {@render children()}
      {/if}
    </a>
  {:else if _component === "form"}
    <form {...props}>
      {#if children}
        {@render children()}
      {/if}
    </form>
  {:else if _component === "button"}
    <button {...props}>
      {#if children}
        {@render children()}
      {/if}
    </button>
  {:else}
    <div {...props}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  {/if}
{/snippet}

<Skeleton skeleton={loading} {radius}>
  {@render c({
    id,
    target,
    href,
    class: className,
    onclick: _onClick,
    method,
    action,
    type,
    ...rest,
  })}
</Skeleton>
