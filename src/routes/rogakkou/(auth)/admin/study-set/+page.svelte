<script>
  import Textarea from "$lib/components/Textarea/Textarea.svelte";
  import Button from "$lib/components/Button/Button.svelte";
</script>

<div class="flex justify-center">
  <form class="max-w-[1024px] w-full py-4" novalidate>
    <label for="words" class="mb-2">Study set words</label>
    <Textarea
      id="words"
      name="words"
      placeholder="日本語 にほんご nihongo japanese (one per line)"
      rows="24"
    />
    <Button type="submit" className="w-full mt-2">Save</Button>
  </form>
</div>
