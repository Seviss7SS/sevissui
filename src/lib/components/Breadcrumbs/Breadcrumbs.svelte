<script lang="ts">
  import Button from "$lib/atoms/Button/Button.svelte";
  import ChevronRight from "$lib/icons/ChevronRight.svelte";
  // TODO: horizontal list of buttons with a seperator between them

  export let dark = false;

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
      {dark}
      variant="text"
      href={breadcrumb.active ? "" : breadcrumb.href}
      disabled={breadcrumb.active}
      color={breadcrumb.active ? "gray" : "primary"}>{breadcrumb.label}</Button
    >
    {#if i < breadcrumbs.length - 1}
      <ChevronRight className="text-gray-400 my-auto" />
    {/if}
  {/each}
</nav>
