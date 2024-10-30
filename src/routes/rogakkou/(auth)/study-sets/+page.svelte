<script lang="ts">
  import CustomCard from "$lib/customs/card/CustomCard.svelte";
  import Progress from "$lib/atoms/Progress/Progress.svelte";
</script>

<div
  class="container max-w-[1024px] flex flex-col items-center justify-center gap-lg text-center mx-auto pb-8 pt-4 px-3"
>
  <CustomCard
    clickable
    variant="variant1"
    imgSrc="https://images.unsplash.com/photo-1714679374077-830e435178b2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    className="h-16 w-96"
    theme="dark"
    paddingClass="p-sm"
  >
    <div class="h-full flex flex-col justify-between p-sm">
      <h5
        class="text-2xl font-bold tracking-tight text-white leading-none text-left"
      >
        Study set
      </h5>
      <Progress className="mt-auto" />
    </div>
  </CustomCard>
</div>
