<script lang="ts">
  import Button from "$lib/components/Button/Button.svelte";
  import Collapse from "$lib/components/Collapse/Collapse.svelte";

  interface SidebarItemProps {
    collapseContent?: any;
    href?: string;
    label?: string;
    icon?: any;
  }

  const { collapseContent, href, label, icon }: SidebarItemProps = $props();

  let open: boolean = $state(false);
</script>

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

{#snippet content()}
  <Button
    component={href ? "div" : "a"}
    radius="rounded-none"
    color="btn-gray-light"
    class="w-full justify-start hover:text-blue-600"
    variant="btn-text"
  >
    {#if icon}
      {@render icon()}
    {/if}
    <span class="text-left flex-1">{label}</span>
    {@render chevron({ expanded: open })}
  </Button>
{/snippet}

<div>
  {#if collapseContent}
    <Collapse bind:open>
      {@render content()}
      {@render collapseContent()}
    </Collapse>
  {:else}
    {@render content()}
  {/if}
</div>
