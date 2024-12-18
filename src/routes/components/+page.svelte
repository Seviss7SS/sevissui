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
    {
      href: "/components/combobox",
      label: "Combobox",
    },
    {
      href: "/components/collapse",
      label: "Collapse",
    },
    {
      href: "/components/select",
      label: "Select",
    },
    {
      href: "/components/form-renderer",
      label: "Form Renderer",
    },
    {
      href: "/components/skeleton",
      label: "Skeleton",
    },
  ];
</script>

<div class="w-screen flex justify-center p-lg">
  <div class="max-w-5xl w-full flex flex-col gap-y-lg">
    {#each components as c}
      <Button variant="btn-filled" href={c.href}>{c.label}</Button>
    {/each}
  </div>
</div>
