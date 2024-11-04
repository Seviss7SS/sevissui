<script>
  import Textarea from "$lib/components/Textarea/Textarea.svelte";
  import Button from "$lib/components/Button/Button.svelte";
</script>

<div class="flex justify-center">
  <form class="max-w-[1024px] w-full py-4" novalidate>
    <label for="sentences" class="mb-2">Reading content</label>
    <Textarea
      id="sentences"
      name="text"
      placeholder="日本語 | translation (one line per sentence)"
      rows={24}
    />
    <Button type="submit" class="w-full mt-2">Save</Button>
  </form>
</div>
