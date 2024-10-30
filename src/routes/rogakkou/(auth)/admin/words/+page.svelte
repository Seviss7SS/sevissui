<script>
  import Button from "$lib/atoms/Button/Button.svelte";
</script>

<div class="flex justify-center">
  <div class="max-w-[1024px] w-full py-4 flex flex-col gap-y-lg text-center">
    <div class="flex gap-x-md">
      <div class="flex gap-x-md border-r pr-md">
        <div class="my-auto">0 selected</div>
        <Button>Autofill blank</Button>
      </div>
      <div class="flex gap-x-md">
        <Button>
          Filter by...<ChevronDownOutline class="w-6 h-6 ms-2 text-white" />
        </Button>
        <Dropdown>
          {#each filterMethods as fm}
            <DropdownItem href={fm.href}>{fm.label}</DropdownItem>
          {/each}
        </Dropdown>
      </div>
    </div>
    {#key words}
      {#each words as word}
        <EditableWordInline {word} />
      {/each}
    {/key}
    <div class="flex justify-center py-6">
      <Pagination {pages} large on:previous={previous} on:next={next} icon>
        <svelte:fragment slot="prev">
          <span class="sr-only">Previous</span>
          <ChevronLeftOutline class="w-6 h-6" />
        </svelte:fragment>
        <svelte:fragment slot="next">
          <span class="sr-only">Next</span>
          <ChevronRightOutline class="w-6 h-6" />
        </svelte:fragment>
      </Pagination>
    </div>
  </div>
</div>
