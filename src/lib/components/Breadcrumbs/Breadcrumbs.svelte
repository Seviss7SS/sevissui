<script lang="ts">
  import Button from "$lib/components/Button/Button.svelte";
  import ChevronRight from "$lib/icons/ChevronRight.svelte";

  export let breadcrumbs: { label: string; href: string; active: boolean }[] =
    [];
</script>

<nav class="flex">
  {#each breadcrumbs as breadcrumb, i}
    <Button
      variant="btn-text-gray"
      href={breadcrumb.active ? "" : breadcrumb.href}
      disabled={breadcrumb.active}
      colorClass={breadcrumb.active ? "text-gray-light" : ""}
      >{breadcrumb.label}</Button
    >
    {#if i < breadcrumbs.length - 1}
      <ChevronRight class="text-gray-light my-auto" />
    {/if}
  {/each}
</nav>
