<script>
  import InputField from "$lib/components/InputField/InputField.svelte";
  import Search from "$lib/icons/Search.svelte";

  export let title;
</script>

<header class="h-header w-full pl-lg pt-xl bg-gray-darker flex justify-between">
  <h1 class="text-white font-bold text-3xl h-full">
    {title}
  </h1>
  <InputField placeholder="Search">
    <Search slot="left" />
  </InputField>
</header>
