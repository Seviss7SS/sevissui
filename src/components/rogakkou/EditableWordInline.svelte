<script lang="ts">
  import InputField from "$lib/components/InputField/InputField.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import Popover from "$lib/components/Popover/Popover.svelte";
  import Checkbox from "$lib/components/Checkbox/Checkbox.svelte";

  export let deleted = false;

  const word = {
    kanji: "言葉",
    id: "言葉",
    has_autofill_error: false,
  };
</script>

{#if !deleted}
  <div class="grid grid-cols-6 gap-x-2">
    <div class="flex gap-x-2 font-bold text-xl my-auto text-left">
      <div class="my-auto">
        <Checkbox disabled={word.has_autofill_error} />
      </div>
      {word.kanji}
    </div>
    <div>
      <InputField placeholder="Meaning" />
    </div>
    <div>
      <InputField placeholder="Kana" />
    </div>
    <div class="flex gap-x-2 col-span-2">
      <Button class="flex-1" color="primary">Save</Button>
      <Popover>
        <Button id={`delete-word-${word.id}`} class="flex-1" color="red"
          >Delete</Button
        >
        <Button slot="content" size="xs" color="red">Confirm deletion</Button>
      </Popover>
    </div>
  </div>
{/if}
