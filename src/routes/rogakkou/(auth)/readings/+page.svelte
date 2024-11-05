<script>
  import CustomCard from "$lib/custom/card/FlowbiteCard/FlowbiteCard.svelte";
</script>

<div class="p-md grid grid-cols-1 md:grid-cols-2 gap-sm">
  <a href="/rogakkou/readings/1">
    <CustomCard
      clickable
      variant="variant1"
      imgSrc="https://images.unsplash.com/photo-1714679374077-830e435178b2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      class="h-48"
      theme="dark"
    >
      <div class={"flex-1 p-lg"}>
        <h5 class={"mb-2 text-2xl font-bold tracking-tight"}>Variant1</h5>
        <div class={"font-normal leading-tight"}>Hello world</div>
      </div>
    </CustomCard>
  </a>
  <a href="/rogakkou/readings/1">
    <CustomCard
      clickable
      variant="variant1"
      imgSrc="https://images.unsplash.com/photo-1714679374077-830e435178b2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      class="h-48"
      theme="dark"
    >
      <div class={"flex-1 p-lg"}>
        <h5 class={"mb-sm text-2xl font-bold tracking-tight"}>Variant1</h5>
        <div class={"font-normal leading-tight"}>Hello world</div>
      </div>
    </CustomCard>
  </a>
</div>
