<script>
  import ReadingCard from "../../../../components/rogakkou/ReadingCard.svelte";

  const readings = [
    {
      imageSrc:
        "https://assets.api.uizard.io/api/cdn/stream/55a4ad887-54c8-48c9-ba1a-7f64168c7396.png",
      imageAlt: "",
      title: "Japanese Vocabulary",
      category: "Explore and learn",
      description: "Join the class at 11 AM, Room 300. Number of learners: 34",
    },
  ];
</script>

<div class="p-md grid grid-cols-1 md:grid-cols-2 gap-sm">
  {#each readings as reading}
    <ReadingCard {...reading} />
  {/each}
</div>
