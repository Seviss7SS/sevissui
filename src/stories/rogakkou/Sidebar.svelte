<script lang="ts">
  import Button from "$lib/atoms/Button/Button.svelte";

  const links = [
    {
      label: "Home",
    },
    {
      label: "Readings",
    },
    {
      label: "Study Sets",
    },
    {
      label: "Words",
    },
    {
      label: "Add Word",
    },
    {
      label: "Admin",
    },
  ];
</script>

<aside class="w-64 h-screen bg-gray-900 py-4 px-3">
  <div class="text-white text-xl pb-5 leading-none font-bold">Rogakkou</div>
  <div class="overflow-y-auto h-full rounded-none">
    {#each links as link}
      <Button dark className="w-full" color="gray" variant="subtle">
        <div class="flex gap-x-2">
          <span class="my-auto">{link.label}</span>
        </div>
      </Button>
    {/each}
  </div>
</aside>
