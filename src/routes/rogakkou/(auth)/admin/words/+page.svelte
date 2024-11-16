<script>
  import Button from "$lib/components/Button/Button.svelte";
  import Dropdown from "$lib/components/Dropdown/Dropdown.svelte";
  import Pagination from "$lib/components/Pagination/Pagination.svelte";

  import EditableWordInline from "../../../../../components/rogakkou/EditableWordInline.svelte";

  const filterMethods = [
    { href: "?meaning=1", label: "Needs meaning" },
    { value: "?studyset=1", label: "In study set" },
  ];
</script>

<div class="flex justify-center">
  <div class="max-w-[1024px] w-full py-4 flex flex-col gap-y-lg text-center">
    <div class="flex gap-x-md">
      <div class="flex gap-x-md border-r pr-md">
        <div class="my-auto">0 selected</div>
        <Button>Autofill blank</Button>
      </div>
      <div class="flex gap-x-md">
        <Button>Filter by...</Button>
        <Dropdown dropdownItems={filterMethods} />
      </div>
    </div>
    <EditableWordInline />
    <EditableWordInline />
    <EditableWordInline />
    <div class="flex justify-center py-6">
      <Pagination total={100} pageSize={10}></Pagination>
    </div>
  </div>
</div>
