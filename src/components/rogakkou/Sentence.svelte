<script>
  import Button from "$lib/components/Button/Button.svelte";

  export let showTranslation = false;

  const sentence = {
    translation: "Test translation",
    words: [],
  };
</script>

<div
  class="text-center w-full border-t border-b border-white relative py-2 flex h-14"
>
  {#if showTranslation}
    <div class="text-center w-full my-auto">
      {sentence.translation}
    </div>
  {:else}
    <div class="flex flex-wrap content-center justify-center w-full gap-md">
      <!--       {#each sentence.words as word}
        {#if word.word}
          <Word word={word.word} />
        {:else}
          <div class="my-auto">{word.display}</div>
        {/if}
      {/each} -->
    </div>
  {/if}
  <div class="flex content-center flex-wrap absolute right-0">
    <Button
      variant="outlined"
      color="dark"
      on:click={() => (showTranslation = !showTranslation)}
    >
      {!showTranslation ? "JP" : "EN"}
    </Button>
    <Button className="h-8 w-8 !ring-0" color="transparent">
      <!--       <DotsVerticalOutline /> -->
    </Button>
    <!--     <Dropdown>
      <DropdownItem class="whitespace-nowrap" on:click={handleReviewClick}
        >Review</DropdownItem
      >
    </Dropdown> -->
  </div>
</div>
