<script>
  import Button from "$lib/components/Button/Button.svelte";
  import Popover from "$lib/components/Popover/Popover.svelte";

  const word = {
    meaning: "HEllo world",
  };
</script>

<Popover>
  <slot></slot>
  <div slot="content">
    <div class="text-lg leading-tight text-white">{word.meaning}</div>

    <Button href="/auth/login" size="xs" class="mt-4 cursor-pointer">
      <div>Log in to track progress</div>
    </Button>
  </div>
</Popover>
