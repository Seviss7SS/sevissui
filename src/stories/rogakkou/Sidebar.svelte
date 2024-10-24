<script lang="ts">
  import Home from "@tabler/icons-svelte/icons/home";
  import Button from "@/components/Button/Button.svelte";

  const links = [
    {
      label: "Home",
    },
  ];
</script>

<aside class="w-64 h-screen">
  <div
    class="overflow-y-auto py-4 px-3 bg-gray-800 h-full rounded-none space-y-2"
  >
    {#each links as link}
      <Button className="w-full">
        <div class="flex gap-x-2">
          <Home />
          <span class="my-auto">{link.label}</span>
        </div>
      </Button>
    {/each}
  </div>
</aside>
