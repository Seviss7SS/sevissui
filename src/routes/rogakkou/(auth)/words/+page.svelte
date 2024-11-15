<script>
  import WordCard from "../../../../components/rogakkou/WordCard.svelte";
  import InputField from "$lib/components/InputField/InputField.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import Search from "$lib/icons/Search.svelte";
</script>

<div class="h-full flex flex-col">
  <form novalidate class="max-w-[1024px] w-full mx-auto py-4 flex">
    <InputField name="search" radius="rounded-full" class="w-full">
      <Button radius="rounded-none" slot="right" type="submit">
        <Search />
      </Button>
    </InputField>
  </form>
  <div class="w-full overflow-auto flex-1">
    <div
      class="container max-w-[1024px] flex flex-col items-center justify-center gap-lg text-center mx-auto pb-8 pt-4"
    >
      <WordCard />
    </div>
  </div>
</div>
