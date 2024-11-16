<script>
  import Sidebar from "../../../components/rogakkou/Sidebar.svelte";
  import Header from "../../../components/rogakkou/Header.svelte";
  import DetailsAside from "../../../components/rogakkou/DetailsAside.svelte";
  import AddWordModal from "../../../components/rogakkou/AddWordModal.svelte";
</script>

<AddWordModal />

<div class="bg-gray-darkest w-screen h-screen flex overflow-hidden">
  <Sidebar />
  <div class="flex-1">
    <div class="bg-gray-dark w-full">
      <Header title="Explore" />
    </div>
    <div class="pt-lg px-md">
      <slot />
    </div>
  </div>
  <DetailsAside />
</div>
