<script>
  import Card from "$lib/components/Card/Card.svelte";
</script>

<aside class="px-lg pt-xl w-[352px] h-screen bg-gray-darker">
  <h3 class="text-xl font-bold text-white mb-xl">Word Details</h3>
  <Card class="p-0">
    <img
      class="w-full"
      alt=""
      src="https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <div class="p-md">
      <h6 class="text-white font-bold text-lg mb-md">Word of the Day</h6>
      <div>Kotoba</div>
    </div>
  </Card>
  <h3 class="text-xl font-bold text-white my-xl">Progress</h3>
  <Card class="border border-solid border-gray-lightest p-lg">
    <div class="flex gap-x-md">
      <div class="w-12 h-12 flex rounded-full bg-white text-black">
        <span class="m-auto font-bold">W</span>
      </div>
      <div>
        <div class="font-bold">Daily Quiz</div>
        <div class="text-xs">Weekly Challenge</div>
      </div>
    </div>
  </Card>
</aside>
