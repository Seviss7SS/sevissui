<script>
  import Card from "$lib/components/Card/Card.svelte";
  import Button from "$lib/components/Button/Button.svelte";

  export let word;
</script>

<Card>
  <div class={`h-full w-full flex justify-between`}>
    <div class="w-[50px]" />
    <div class="p-2 text-center font-bold text-3xl text-white">
      {word.kanji}
    </div>
    <Button class="rounded-none !bg-transparent !ring-0">X</Button>
  </div>
</Card>
