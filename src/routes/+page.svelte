<script>
  import FlowbiteCard from "$lib/custom/card/FlowbiteCard/FlowbiteCard.svelte";

  const labelClass = "text-xl mb-sm font-bold";
</script>

<div class="p-lg flex flex-col gap-y-md">
  <div>
    <h3 class={labelClass}>Default</h3>
    <FlowbiteCard
      variant="default"
      title="Noteworthy technology acquisitions 2021"
    >
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </FlowbiteCard>
  </div>
  <div>
    <h3 class={labelClass}>Image - Horizontal</h3>
    <FlowbiteCard
      variant="image"
      imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
      class="h-96"
    >
      <div class="p-5">
        <div>
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Noteworthy technology acquisitions 2021
          </h5>
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
    </FlowbiteCard>
  </div>
  <div>
    <h3 class={labelClass}>Image - Vertical</h3>
    <FlowbiteCard
      variant="image"
      imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
      class="w-96"
      vertical
    >
      <div class="p-5">
        <div>
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Noteworthy technology acquisitions 2021
          </h5>
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
    </FlowbiteCard>
  </div>
  <div>
    <h3 class={labelClass}>User Profile</h3>
    <FlowbiteCard
      variant="profile"
      avatarSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
      class="w-full max-w-sm"
      name="Bonnie Green"
      primaryButtonProps={{
        label: "Add Friend",
      }}
      secondaryButtonProps={{
        label: "Message",
      }}
    />
  </div>
</div>
