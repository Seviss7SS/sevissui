<script>
  import Button from "$lib/components/Button/Button.svelte";

  const components = [
    {
      href: "/components/card",
      label: "Card",
    },
    {
      href: "/components/textarea",
      label: "Textarea",
    },
    {
      href: "/components/input-field",
      label: "Input Field",
    },
    {
      href: "/components/dropdown",
      label: "Dropdown",
    },
    {
      href: "/components/button",
      label: "Button",
    },
  ];
</script>

<div class="w-screen flex justify-center p-lg">
  <div class="max-w-5xl w-full flex flex-col gap-y-lg">
    {#each components as c}
      <Button variant="btn-filled-primary" href={c.href}>{c.label}</Button>
    {/each}
  </div>
</div>
