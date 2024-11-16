<script>
  import Card from "$lib/components/Card/Card.svelte";
  import Progress from "$lib/components/Progress/Progress.svelte";

  export let imageSrc;
  export let imageAlt;
  export let title;
  export let category;
  export let description;
</script>

<Card class="h-[180px] p-sm flex gap-x-md text-white rounded-3xl">
  <img src={imageSrc} alt={imageAlt} class="h-full w-[136px] rounded-3xl" />
  <div class="py-sm flex flex-col justify-between flex-1">
    <div>
      <div class="text-lg font-bold">{title}</div>
      <div class="text-sm">{category}</div>
    </div>
    <div>{description}</div>
    <div>
      <Progress />
    </div>
  </div>
</Card>
