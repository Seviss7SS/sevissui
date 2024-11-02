<script lang="ts">
  import cx from "classnames";

  export let label = "";
  export let loading = false;
  export let skeleton = false;
  export let disabled = false;
  export let type: "button" | "submit" | "reset" | undefined = "button";
  export let href: string = "";
  export let radius = "rounded-lg";
  export let variant: string = "btn-primary-base";
  export let size: string = "";
  export let id: string | undefined = undefined;

  $: btnClass = cx(
    "btn font-medium focus:outline-none filter block text-center enabled:hover:opacity-75 enabled:active:opacity-50",
    {
      [variant]: variant,
      [radius]: radius,
      [size]: size,
      [$$props.class]: $$props.class,
    }
  );
</script>

<div class="px-6 py-3.5 text-base"></div>

{#if href && !disabled}
  <a {id} {href} {type} class={btnClass}>
    <slot>{label}</slot>
  </a>
{:else}
  <button {id} {disabled} {type} class={btnClass}>
    <slot>{label}</slot>
  </button>
{/if}
