<script>
  import InputField from "$lib/components/InputField/InputField.svelte";
  import Progress from "$lib/components/Progress/Progress.svelte";
</script>

<div>
  <div class="gap-8 flex flex-col">
    <h1 class="text-5xl leading-none">Test</h1>
    <div class="text-9xl leading-none">kanji</div>
    <form class="w-full" novalidate>
      <InputField />
    </form>
    <Progress />
  </div>
</div>
