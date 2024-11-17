<script lang="ts">
  import Spinner from "$lib/icons/Spinner.svelte";
  import cx from "classnames";

  export let label = "";
  export let loading = false;
  export let skeleton = false;
  export let disabled = false;
  export let type: "button" | "submit" | "reset" | undefined = "button";
  export let href: string = "";
  export let radius = "rounded";
  export let variant: string = "btn-primary";
  export let size: string = "btn-md";
  export let id: string | undefined = undefined;
  export let onClick: ((e: MouseEvent) => void) | undefined = undefined;

  const isClickable: boolean = Boolean(onClick || href);

  $: btnClass = cx(
    "btn font-medium focus:outline-none filter block text-center relative overflow-hidden",
    {
      [radius]: radius,
      [size]: size,
      [variant]: variant,
      "enabled:hover:opacity-75 enabled:active:opacity-50 cursor-pointer":
        isClickable,
      "cursor-default": !isClickable,
      "animate-pulse": skeleton,
      [$$props.class]: $$props.class,
    }
  );
</script>

{#if href && !disabled}
  <a {id} {href} {type} class={btnClass} on:click={onClick}>
    {#if !loading}
      <slot>{label}</slot>
    {:else}
      <slot name="loader"
        ><Spinner class="animate-spin text-grayase h-6 w-6" /></slot
      >
    {/if}
  </a>
{:else}
  <button {id} {disabled} {type} class={btnClass} on:click={onClick}>
    {#if skeleton}
      <div></div>
    {:else if loading}
      <slot name="loader"
        ><Spinner class="animate-spin text-gray h-6 w-6" /></slot
      >
    {:else}
      <slot>{label}</slot>
    {/if}
  </button>
{/if}
