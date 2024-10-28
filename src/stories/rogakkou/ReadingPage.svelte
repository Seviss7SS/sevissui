<script>
  import Layout from "./Layout.svelte";

  const reading = {
    title: "Blaze",
    image_url:
      "https://images.unsplash.com/photo-1714679374077-830e435178b2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    youtube_embed_id: "",
    author: "KOTOKO",
    summary: "Shakugan no Shana 2 OP 2",
  };
</script>

<Layout>
  <div
    class="container max-w-[1024px] flex flex-col align-middle justify-center gap-4 text-center mx-auto pb-8 pt-4 text-white"
  >
    <div class="gap-1 flex flex-col">
      <h1 class="text-5xl">{reading.title}</h1>
      {#if reading.youtube_embed_id}
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${reading.youtube_embed_id}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="mx-auto my-4"
        ></iframe>
      {:else}
        <div
          class="w-[250px] h-[425px] bg-no-repeat bg-center bg-cover mx-auto"
          style={`background-image: url('${reading.image_url}')`}
        ></div>
      {/if}
      <div>By <span class="underline">{reading.author}</span></div>
      <div class="text-2xl">Description</div>
      <div>{reading.summary}</div>
    </div>
    <div class="w-full">
      <!--       {#each reading.sentences as sentence}
        <Sentence {sentence} />
      {/each} -->
    </div>
  </div>
</Layout>
