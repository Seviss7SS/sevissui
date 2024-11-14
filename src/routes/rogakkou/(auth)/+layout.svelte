<script>
  import Sidebar from "../../../components/rogakkou/Sidebar.svelte";
  import Header from "../../../components/rogakkou/Header.svelte";
</script>

<div class="bg-black w-screen h-screen flex overflow-hidden">
  <Sidebar />
  <div class="flex-1">
    <div class="bg-gray-dark w-full">
      <Header title="Explore" />
    </div>
    <div class="pt-lg px-md">
      <slot />
    </div>
  </div>
</div>
