<script lang="ts">
  import Button from "@/atoms/Button/Button.svelte";
  import ChevronRight from "@tabler/icons-svelte/icons/chevron-right";
  // TODO: horizontal list of buttons with a seperator between them

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
      variant="text"
      href={breadcrumb.active ? "" : breadcrumb.href}
      disabled={breadcrumb.active}
      color={breadcrumb.active ? "gray" : "primary"}>{breadcrumb.label}</Button
    >
    {#if i < breadcrumbs.length - 1}
      <ChevronRight class="text-gray-400 my-auto" />
    {/if}
  {/each}
</nav>
