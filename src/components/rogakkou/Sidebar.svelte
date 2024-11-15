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

<aside class="w-sidebar h-screen flex flex-col bg-gray-darker">
  <div
    class="text-white text-xl w-full leading-none font-bold h-header px-3 py-6"
  >
    <div>Rogakkou</div>
  </div>
  <div
    class="overflow-y-auto flex-1 w-full rounded-none flex flex-col justify-between"
  >
    <div>
      {#each links as link}
        <Button
          class="w-full !text-white"
          radius="rounded-none"
          variant="btn-subtle-gray-lightest"
          href={link.href}
        >
          <div class="flex gap-x-md">
            <span class="my-auto">{link.label}</span>
          </div>
        </Button>
      {/each}
    </div>
    <div class="pb-3">
      <hr class="border-gray-base my-3" />
      <Button
        class="w-full !text-white"
        radius="rounded-none"
        variant="btn-subtle-gray-light"
      >
        <div class="flex gap-x-md">
          <span class="my-auto">Logout</span>
        </div>
      </Button>
    </div>
  </div>
</aside>
