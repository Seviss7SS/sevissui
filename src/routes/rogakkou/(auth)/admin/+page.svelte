<script>
  import Button from "$lib/atoms/Button/Button.svelte";

  const links = [
    {
      href: "/rogakkou/admin/readings",
      label: "Readings",
    },
    {
      href: "/rogakkou/admin/words",
      label: "Words",
    },
  ];
</script>

<div class="flex justify-center">
  <div class="max-w-[1024px] w-full py-4 flex flex-col gap-y-lg text-center">
    {#each links as link}
      <Button variant="subtle" theme="light" href={link.href}
        >{link.label}</Button
      >
    {/each}
  </div>
</div>
