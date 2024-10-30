<script>
  /*   import WordCard from "../components/WordCard.svelte"; */
  import InputField from "$lib/components/InputField/InputField.svelte";
  import Button from "$lib/atoms/Button/Button.svelte";
  import Search from "$lib/icons/Search.svelte";

  export let words = [];
</script>

<div class="h-full flex flex-col">
  <form novalidate class="max-w-[1024px] w-full mx-auto py-4 flex">
    <InputField name="search" />
    <Button type="submit">
      <Search />
    </Button>
  </form>
  <div class="w-full overflow-auto flex-1">
    <div
      class="container max-w-[1024px] flex flex-col items-center justify-center gap-4 text-center mx-auto pb-8 pt-4"
    >
      <!--       {#each wordsList as word}
        <WordCard {word} />
      {/each} -->
    </div>
  </div>
</div>
