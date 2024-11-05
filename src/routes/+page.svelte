<script>
  import FlowbiteCard from "$lib/custom/card/FlowbiteCard/FlowbiteCard.svelte";

  const labelClass = "text-xl mb-sm font-bold";
</script>

<div class="p-lg flex flex-col gap-y-md">
  <div>
    <h3 class={labelClass}>Default</h3>
    <FlowbiteCard variant="default">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Noteworthy technology acquisitions 2021
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </FlowbiteCard>
  </div>
  <div>
    <FlowbiteCard>Hello world</FlowbiteCard>
  </div>
</div>
