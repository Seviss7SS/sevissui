<script lang="ts">
  import Home from "@tabler/icons-svelte/icons/home";
  import BookFilled from "@tabler/icons-svelte/icons/book-filled";
  import Button from "@/atoms/Button/Button.svelte";
  import ClipboardList from "@tabler/icons-svelte/icons/clipboard-list";
  import LanguageHiragana from "@tabler/icons-svelte/icons/language-hiragana";
  import UserCog from "@tabler/icons-svelte/icons/user-cog";
  import CirclePlusFilled from "@tabler/icons-svelte/icons/circle-plus-filled";

  const links = [
    {
      label: "Home",
      icon: Home,
    },
    {
      label: "Readings",
      icon: BookFilled,
    },
    {
      label: "Study Sets",
      icon: ClipboardList,
    },
    {
      label: "Words",
      icon: LanguageHiragana,
    },
    {
      label: "Add Word",
      icon: CirclePlusFilled,
    },
    {
      label: "Admin",
      icon: UserCog,
    },
  ];
</script>

<aside class="w-64 h-screen bg-gray-900 py-4 px-3">
  <div class="text-white text-xl pb-5 leading-none font-bold">Rogakkou</div>
  <div class="overflow-y-auto h-full rounded-none">
    {#each links as link}
      <Button dark className="w-full" color="gray" variant="subtle">
        <div class="flex gap-x-2">
          <svelte:component this={link.icon} />
          <span class="my-auto">{link.label}</span>
        </div>
      </Button>
    {/each}
  </div>
</aside>
