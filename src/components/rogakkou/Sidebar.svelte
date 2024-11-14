<script lang="ts">
  import Button from "$lib/components/Button/Button.svelte";

  const links = [
    {
      label: "Home",
      href: "/rogakkou",
    },
    {
      label: "Readings",
      href: "/rogakkou/readings",
    },
    {
      label: "Study Sets",
      href: "/rogakkou/study-sets",
    },
    {
      label: "Words",
      href: "/rogakkou/words",
    },
    {
      label: "Add Word",
    },
    {
      label: "Admin",
      href: "/rogakkou/admin",
    },
  ];
</script>

<aside class="w-64 h-screen bg-gray-800 py-4 px-3">
  <div class="text-white text-xl pb-5 leading-none font-bold">Rogakkou</div>
  <div class="overflow-y-auto h-full rounded-none">
    {#each links as link}
      <Button class="w-full" variant="btn-subtle-gray-light" href={link.href}>
        <div class="flex gap-x-md">
          <span class="my-auto">{link.label}</span>
        </div>
      </Button>
    {/each}
  </div>
</aside>
