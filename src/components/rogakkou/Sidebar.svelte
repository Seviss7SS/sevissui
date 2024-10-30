<script lang="ts">
  import Button from "$lib/atoms/Button/Button.svelte";

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
      <Button
        theme="light"
        className="w-full"
        color="gray"
        variant="subtle"
        href={link.href}
      >
        <div class="flex gap-x-2">
          <span class="my-auto">{link.label}</span>
        </div>
      </Button>
    {/each}
  </div>
</aside>
