<script>
  import Button from "$lib/components/Button/Button.svelte";
  import Card from "$lib/components/Card/Card.svelte";
  import Popover from "$lib/components/Popover/Popover.svelte";

  const word = {
    kanji: "言葉",
    meaning: "Word",
    explanation: "Hello world",
  };
</script>

<Popover class={$$props.class} fullWidth={false} contentClass="max-w-96">
  <slot></slot>
  <Card slot="content" class="w-full text-sm font-light p-md card-dark mx-auto">
    <div class="text-xl font-bold text-center">{word.kanji}</div>
    <div class="text-sm text-gray-lightest text-center mb-md">(kotoba)</div>
    <div class="text-lg leading-tight text-white text-center">
      {word.meaning}
    </div>

    <Button href="/auth/login" class="mt-lg">
      <div>Log in to track progress</div>
    </Button>
  </Card>
</Popover>
