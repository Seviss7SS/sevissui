<script>
  import Textarea from "$lib/components/Textarea/Textarea.svelte";

  const labelClass = "text-xl mb-sm font-bold";
</script>

<div class="p-lg flex flex-col gap-y-md">
  <h1 class="text-3xl mb-md font-black">Flowbite</h1>
  <hr />
  <div>
    <h3 class={labelClass}>Default</h3>
    <Textarea label="Your message" name="message" class="textarea-primary" />
  </div>
</div>
