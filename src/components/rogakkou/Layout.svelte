<script>
  import Sidebar from "./Sidebar.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs/Breadcrumbs.svelte";
</script>

<div class="bg-black w-screen h-screen flex">
  <Sidebar />
  <div class="flex-1">
    <div class="bg-gray-900 w-full">
      <Breadcrumbs theme="light" />
    </div>
    <slot />
  </div>
</div>
