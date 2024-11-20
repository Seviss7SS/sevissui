<script>
  import Button from "$lib/components/Button/Button.svelte";
  import Dropdown from "$lib/components/Dropdown/Dropdown.svelte";
  import DropdownItem from "$lib/components/Dropdown/DropdownItem.svelte";

  const labelClass = "text-xl mb-sm font-bold";
</script>

<div class="p-lg flex flex-col gap-y-md">
  <h1 class="text-3xl mb-md font-black">Flowbite</h1>
  <hr />
  <div>
    <h3 class={labelClass}>Default</h3>
    <Dropdown>
      <Button>Show options</Button>
      <div slot="content">
        <DropdownItem>
          <Button
            variant="btn-subtle-gray-lightest !text-black"
            radius="rounded-none"
            class="w-full"
            forceClickable>Dashboard</Button
          >
        </DropdownItem>
        <DropdownItem>
          <Button
            variant="btn-subtle-gray-lightest !text-black"
            class="w-full"
            radius="rounded-none"
            forceClickable>Dashboard</Button
          >
        </DropdownItem>
        <DropdownItem>
          <Button
            variant="btn-subtle-gray-lightest !text-black"
            class="w-full"
            radius="rounded-none"
            forceClickable>Dashboard</Button
          >
        </DropdownItem>
        <DropdownItem>
          <Button
            variant="btn-subtle-gray-lightest !text-black"
            class="w-full"
            forceClickable>Dashboard</Button
          >
        </DropdownItem>
      </div>
    </Dropdown>
  </div>
</div>
