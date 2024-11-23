<script lang="ts">
  import { Pagination } from "bits-ui";
  import ChevronRight from "$lib/icons/ChevronRight.svelte";
  import Button from "$lib/components/Button/Button.svelte";

  export let total: number = 0;
  export let pageSize: number = 0;
  export let page: number = 1;
  export let onPageChange: (pageNum: number) => void = () => {};
</script>

<Pagination.Root
  count={total}
  perPage={pageSize}
  {onPageChange}
  bind:page
  let:pages
  let:range
>
  <div class="my-8 flex items-center">
    <Pagination.PrevButton>
      <Button forceClickable variant="btn-subtle-gray-darkest">
        <ChevronRight class="transform rotate-180" />
      </Button>
    </Pagination.PrevButton>
    <div class="flex items-center gap-2.5">
      {#each pages as p (p.key)}
        {#if p.type === "ellipsis"}
          <div class="text-[15px] font-medium text-foreground-alt">...</div>
        {:else}
          <Pagination.Page page={p}>
            <Button
              disabled={p.value === page}
              forceClickable
              variant={p.value === page
                ? "btn-filled-primary"
                : "btn-subtle-gray-darkest"}
            >
              {p.value}
            </Button>
          </Pagination.Page>
        {/if}
      {/each}
    </div>
    <Pagination.NextButton>
      <Button forceClickable variant="btn-subtle-gray">
        <ChevronRight />
      </Button>
    </Pagination.NextButton>
  </div>
  <slot name="range" {range} />
</Pagination.Root>
