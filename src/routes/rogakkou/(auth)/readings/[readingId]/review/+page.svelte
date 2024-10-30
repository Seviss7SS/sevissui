<script>
  import Button from "$lib/components/Button/Button.svelte";
</script>

<div
  class="container max-w-[1024px] flex flex-col align-middle justify-center gap-4 text-center mx-auto pb-8 pt-4"
>
  <div class="flex flex-col gap-y-4">
    <button
      class="border-2 rounded-full p-4 text-2xl font-bold flex justify-between cursor-pointer hover:bg-gray-800 active:bg-gray-700"
    >
      Sentence
      <Button disabled color="light" size="xs" className="w-6 h-6 px-0 my-auto">
        Check
      </Button>
    </button>
  </div>
</div>
