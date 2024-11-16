<script>
  import InputField from "$lib/components/InputField/InputField.svelte";
  import Progress from "$lib/components/Progress/Progress.svelte";
  import Button from "$lib/components/Button/Button.svelte";
</script>

<div
  class="container max-w-[1024px] flex flex-col align-middle justify-center gap-4 text-center mx-auto pb-8 pt-4"
>
  <div class="gap-8 flex flex-col">
    <div class="text-9xl leading-none text-white">ピアス</div>
    <form class="w-full">
      <InputField size="lg" align="text-center">
        <Button type="button" variant="btn-subtle-gray" slot="right">
          {">"}
        </Button>
      </InputField>
    </form>
    <div class="text-white">Pierced ears</div>
    <Button type="button" variant="btn-filled-green-400"
      >No, I was correct</Button
    >
    <Progress size="h-6" />
  </div>
</div>
