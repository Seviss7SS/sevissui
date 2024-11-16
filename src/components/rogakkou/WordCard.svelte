<script>
  import Card from "$lib/components/Card/Card.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  // @ts-ignore
  import WordPopover from "./WordPopover.svelte";

  const word = {
    kanji: "kotoba",
  };
</script>

<WordPopover class="w-full">
  <Card class="p-0">
    <div class="h-full w-full flex justify-between">
      <div class="w-[50px]" />
      <div class="p-2 text-center font-bold text-3xl">
        {word.kanji}
      </div>
      <Button radius="rounded-none" variant="btn-subtle-gray-light">+</Button>
    </div>
  </Card>
</WordPopover>
