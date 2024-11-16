<script lang="ts">
  import Button from "$lib/components/Button/Button.svelte";
  import { page } from "$app/stores";

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
      label: "Admin",
      href: "/rogakkou/admin",
    },
  ];

  const adminLinks = [
    {
      label: "Admin",
      href: "/rogakkou/admin",
    },
    {
      label: "Readings",
      href: "/rogakkou/admin/readings",
    },
    {
      label: "Words",
      href: "/rogakkou/admin/words",
    },
  ];

  $: sidebarLinks = $page.url.pathname.includes("admin") ? adminLinks : links;
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
      {#each sidebarLinks as link}
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
      <Button
        class="w-full !text-white"
        radius="rounded-none"
        variant="btn-subtle-gray-lightest"
      >
        <div class="flex gap-x-md">
          <span class="my-auto">Add Word</span>
        </div>
      </Button>
    </div>
    <div class="pb-3">
      <hr class="border-gray my-3" />
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
