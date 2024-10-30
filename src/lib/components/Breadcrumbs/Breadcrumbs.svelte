<script lang="ts">
  import Button from "$lib/atoms/Button/Button.svelte";
  import type { ComponentTheme } from "$lib/config.ts";
  import ChevronRight from "$lib/icons/ChevronRight.svelte";

  export let theme: ComponentTheme = "base";

  const breadcrumbs = [
    {
      label: "Home",
      icon: null,
      href: "/",
    },
    {
      label: "Books",
      href: "/books",
      active: true,
    },
  ];
</script>

<nav class="flex">
  {#each breadcrumbs as breadcrumb, i}
    <Button
      {theme}
      variant="text"
      href={breadcrumb.active ? "" : breadcrumb.href}
      disabled={breadcrumb.active}
      colorClass={breadcrumb.active ? "text-gray-light" : ""}
      color="primary">{breadcrumb.label}</Button
    >
    {#if i < breadcrumbs.length - 1}
      <ChevronRight className="text-gray-400 my-auto" />
    {/if}
  {/each}
</nav>
