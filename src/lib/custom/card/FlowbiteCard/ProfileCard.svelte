<script lang="ts">
  import cx from "classnames";
  import Button from "$lib/components/Button/Button.svelte";
  import Card from "$lib/components/Card/Card.svelte";

  export let avatarSrc: string = "";
  export let avatarAlt: string = "";
  export let name: string = "";
  export let primaryButtonProps: object | null = null;
  export let secondaryButtonProps: object | null = null;

  const className = cx("p-xl", {
    [$$props.class]: $$props.class,
  });
</script>

<Card {...$$props} class={className}>
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
      src={avatarSrc}
      alt={avatarAlt}
    />
    <h5 class="mb-sm text-xl font-medium">
      {name}
    </h5>
    <slot />
    <div class="flex mt-lg md:mt-xl gap-x-sm">
      {#if primaryButtonProps}
        <Button variant="btn-filled-primary-base" {...primaryButtonProps} />
      {/if}
      {#if secondaryButtonProps}
        <Button variant="btn-outlined-gray-light" {...secondaryButtonProps} />
      {/if}
    </div>
  </div>
</Card>
