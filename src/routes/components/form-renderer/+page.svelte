<script lang="ts">
  import FormRenderer from "$lib/components/FormRenderer/FormRenderer.svelte";

  const fields = [
    {
      label: "Input",
      name: "input",
      fieldType: "input" as "input",
    },
    {
      label: "Select",
      name: "select",
      fieldType: "select" as "select",
      items: [
        {
          label: "Option 1",
          value: "1",
        },
      ],
    },
    {
      label: "Checkbox",
      name: "checkbox",
      fieldType: "checkbox" as "checkbox",
    },
  ];
</script>

<div class="w-screen flex justify-center p-xl">
  <div class="max-w-[1024px] w-full">
    <FormRenderer method="get" {fields} />
  </div>
</div>
