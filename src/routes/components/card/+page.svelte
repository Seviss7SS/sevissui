<script>
  import Button from "$lib/components/Button/Button.svelte";
  import Card from "$lib/components/Card/Card.svelte";

  const labelClass = "text-xl mb-sm font-bold";
  const containerClass = "p-lg flex flex-col gap-y-md";
</script>

<div class={containerClass}>
  <h1 class="text-3xl mb-md font-black">Flowbite</h1>
  <hr />
  <div>
    <h3 class={labelClass}>Default</h3>
    <Card>
      <h5 class="card-header mb-sm text-2xl font-bold tracking-tight">
        Noteworthy technology acquisitions 2021
      </h5>
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </Card>
  </div>
  <div>
    <h3 class={labelClass}>Image - Horizontal</h3>
    <Card class="h-96">
      <div class="flex h-full">
        <img
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
          class="h-full w-auto"
        />
        <div class="flex-1">
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
        </div>
      </div>
    </Card>
  </div>
  <div>
    <h3 class={labelClass}>Image - Vertical</h3>
    <Card class="w-96">
      <div class="flex flex-col w-full">
        <img
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
          class="h-full w-auto"
        />
        <div class="flex-1">
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
        </div>
      </div>
    </Card>
  </div>
  <div>
    <h3 class={labelClass}>User Profile</h3>
    <Card class="w-full max-w-sm p-xl">
      <div class="flex justify-end">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span class="sr-only">Open dropdown</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path
              d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
            />
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Edit</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Export Data</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Delete</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img
          class="w-24 h-24 mb-lg rounded-full shadow-lg"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
        />
        <h5 class="mb-sm text-xl font-medium">Bonnie Green</h5>
        <div class="flex mt-lg md:mt-xl gap-x-sm">
          <Button variant="btn-filled-primary" label="Add Friend" />
          <Button variant="btn-outlined-gray-light" label="Message" />
        </div>
      </div>
    </Card>
  </div>
</div>
