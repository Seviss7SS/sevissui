<script lang="ts">
  import StudySetCard from "../../../../components/rogakkou/StudySetCard.svelte";

  const readings = [
    {
      imageSrc:
        "https://www.oliverpetcare.com/wp-content/uploads/2020/12/pexels-helena-lopes-1790446.jpg",
      imageAlt: "",
      title: "Japanese Vocabulary",
    },
    {
      imageSrc:
        "https://www.oliverpetcare.com/wp-content/uploads/2020/12/pexels-helena-lopes-1790446.jpg",
      imageAlt: "",
      title: "Japanese Vocabulary",
    },
  ];
</script>

<div
  class="container max-w-[720px] flex flex-col items-center justify-center gap-lg text-center mx-auto pb-8 pt-4 px-3"
>
  {#each readings as reading}
    <StudySetCard {...reading} />
  {/each}
</div>
