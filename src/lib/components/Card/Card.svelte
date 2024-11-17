<script lang="ts">
  import cx from "classnames";

  export let clickable: boolean = false;
  export let href: string = "";

  const isClickable = Boolean(clickable || href);
</script>

{#if href}
  <a
    {href}
    class={cx("card shadow filter", {
      "hover:brightness-90 active:brightness-75 cursor-pointer": isClickable,
      [$$props.class]: $$props.class,
    })}
  >
    <slot />
  </a>
{:else}
  <div
    class={cx("card shadow filter", {
      "hover:brightness-90 active:brightness-75 cursor-pointer": isClickable,
      [$$props.class]: $$props.class,
    })}
  >
    <slot />
  </div>
{/if}
