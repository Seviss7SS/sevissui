<script>
  import Card from "$lib/atoms/Card/Card.svelte";

  export let imgSrc = "";
  export let imgAlt = "";
</script>

<Card {...$$props} paddingClass="p-0">
  <div class="flex h-full">
    <img src={imgSrc} alt={imgAlt} class="h-full w-auto" />
    <div class="flex-1">
      <slot name="content" />
    </div>
  </div>
</Card>
