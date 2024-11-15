<script>
  import ReadingCard from "../../../../components/rogakkou/ReadingCard.svelte";

  const readings = [
    {
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "",
      title: "Japanese Vocabulary",
      category: "Explore and learn",
      description: "Join the class at 11 AM, Room 300. Number of learners: 34",
    },
    {
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "",
      title: "Japanese Vocabulary",
      category: "Explore and learn",
      description: "Join the class at 11 AM, Room 300. Number of learners: 34",
    },
  ];
</script>

<div class="p-md grid grid-cols-1 md:grid-cols-2 gap-md">
  {#each readings as reading}
    <ReadingCard {...reading} />
  {/each}
</div>
