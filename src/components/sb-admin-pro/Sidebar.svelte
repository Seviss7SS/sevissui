<script lang="ts">
  import Button from "$lib/components/Button/Button.svelte";
  import Collapse from "$lib/components/Collapse/Collapse.svelte";
  import SidebarItem from "./SidebarItem.svelte";

  let open: boolean = false;
</script>

{#snippet heading({ label }: { label: string })}
  <div class="pt-xl px-lg pb-md text-xs font-bold uppercase text-gray-lightest">
    {label}
  </div>
{/snippet}

{#snippet chevron({ expanded = false })}
  {#if expanded}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
      ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
        d="M6 9l6 6l6 -6"
      /></svg
    >
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
      ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
        d="M9 6l6 6l-6 6"
      /></svg
    >
  {/if}
{/snippet}

<nav class="sidebar">
  {@render heading({ label: "CORE" })}
  <SidebarItem label="Dashboards">
    {#snippet icon()}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-timeline"
        ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
          d="M4 16l6 -7l5 5l5 -6"
        /><path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path
          d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
        /><path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path
          d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
        /></svg
      >
    {/snippet}
  </SidebarItem>

  <div>
    <Collapse>
      <div class="ml-xl pl-lg border-l border-gray-lightest">
        <Button
          component="div"
          radius="rounded-none"
          color="btn-gray-light"
          class="w-full justify-start hover:text-blue-600"
          variant="btn-text"
        >
          Default
        </Button>
        <Button
          component="div"
          radius="rounded-none"
          color="btn-gray-light"
          class="w-full justify-start hover:text-blue-600"
          variant="btn-text"
        >
          Multipurpose
        </Button>
        <Button
          component="div"
          radius="rounded-none"
          color="btn-gray-light"
          class="w-full justify-start hover:text-blue-600"
          variant="btn-text"
        >
          Affiliate
        </Button>
      </div>
    </Collapse>
  </div>
  {@render heading({ label: "CUSTOM" })}
</nav>

<style lang="postcss">
  @reference "tailwindcss";

  .sidebar {
    @apply w-[15rem] h-screen shadow-xl;
  }
</style>
