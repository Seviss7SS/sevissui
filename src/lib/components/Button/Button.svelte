<script lang="ts">
  import Spinner from "$lib/icons/Spinner.svelte";
  import cx from "classnames";

  export let label: string = "";
  export let loading: boolean = false;
  export let disabled: boolean = false;
  export let clickable: boolean = true;
  export let circle: boolean = false;
  export let type: "button" | "submit" | "reset" | undefined = "button";
  export let href: string = "";
  export let radius = "rounded";
  export let variant: string = "btn-filled-primary";
  export let size: string = "btn-md";
  export let id: string | undefined = undefined;
  export let onClick: ((e: MouseEvent) => void) | undefined = undefined;

  const isClickable: boolean = clickable;
  !disabled && !loading;

  $: btnClass = cx(
    "btn font-medium focus:outline-none filter block text-center overflow-hidden select-none",
    {
      [radius]: radius,
      [size]: size,
      [variant]: variant,
      "btn-circle": circle,
      "enabled:hover:opacity-75 enabled:active:opacity-50 cursor-pointer":
        isClickable,
      "pointer-events-none": !isClickable,
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
        ><Spinner class="animate-spin text-gray h-6 w-6" /></slot
      >
    {/if}
  </a>
{:else}
  <button {id} {disabled} {type} class={btnClass} on:click={onClick}>
    {#if loading}
      <slot name="loader"
        ><Spinner class="animate-spin text-gray h-6 w-6" /></slot
      >
    {:else}
      <slot>{label}</slot>
    {/if}
  </button>
{/if}
