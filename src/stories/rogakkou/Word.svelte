<script>
  import Button from "$lib/atoms/Button/Button.svelte";

  const word = {
    kanji: "kotoba",
  };
</script>

<Button roundedClass="rounded-full" color="white">
  {word.kanji}
</Button>
