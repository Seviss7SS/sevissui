<script>
  import Card from "$lib/components/Card/Card.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  // @ts-ignore
  import WordPopover from "./WordPopover.svelte";

  const word = {
    kanji: "kotoba",
  };
</script>

<WordPopover {word}>
  <Card paddingClass="p-0">
    <div class={`h-full w-full flex justify-between`}>
      <div class="w-[50px]" />
      <div class="p-2 text-center font-bold text-3xl">
        {word.kanji}
      </div>
      <Button></Button>
    </div>
  </Card>
</WordPopover>
