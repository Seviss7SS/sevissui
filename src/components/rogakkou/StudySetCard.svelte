<script>
  import Card from "$lib/components/Card/Card.svelte";
  import Progress from "$lib/components/Progress/Progress.svelte";

  export let imageSrc = "";
  export let title = "";
</script>

<Card class="w-full h-20 p-sm flex gap-x-md text-white card-dark rounded-3xl">
  <div
    style={`background-image: url("${imageSrc}");`}
    class="w-32 rounded-3xl bg-center"
  />
  <div class="p-xs flex flex-col justify-between h-full">
    <div class="text-lg font-bold">{title}</div>
    <Progress dark />
  </div>
</Card>
