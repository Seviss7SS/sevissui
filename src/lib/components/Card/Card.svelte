<script lang="ts">
  import cx from "classnames";

  export let href: string = "";
  export let onClick: ((e: MouseEvent) => void) | undefined = undefined;

  const isClickable = Boolean(onClick || href);

  $: cardClass = cx("card dark:card-dark shadow filter", {
    "hover:brightness-90 active:brightness-75 cursor-pointer": isClickable,
    [$$props.class]: $$props.class,
  });
</script>

{#if href}
  <a on:click={onClick} {href} class={cardClass}>
    <slot />
  </a>
{:else if isClickable}
  <button on:click={onClick} class={cardClass}>
    <slot />
  </button>
{:else}
  <div class={cardClass}>
    <slot />
  </div>
{/if}
