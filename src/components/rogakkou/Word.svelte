<script>
  import Button from "$lib/components/Button/Button.svelte";

  const word = {
    kanji: "kotoba",
  };
</script>

<Button roundedClass="rounded-full" color="white">
  {word.kanji}
</Button>
