<script lang="ts">
  import cx from "classnames";
  import type { HTMLInputTypeAttribute } from "svelte/elements";

  export let inputType: HTMLInputTypeAttribute | null | undefined = "text";
  export let id: string | undefined = undefined;
  export let name: string | undefined = undefined;
  export let required: boolean = false;
  export let placeholder: string | undefined = undefined;
  export let theme: string = "";
  export let label: string | undefined = undefined;
</script>

<div class={cx("", { [theme]: theme })}>
  {#if label}
    <label
      for={name || id}
      class={cx("block mb-2 text-sm font-medium text-gray-900 dark:text-white")}
      >{label}</label
    >
  {/if}
  <input
    {id}
    {name}
    {required}
    {placeholder}
    type={inputType}
    class={cx(
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      {
        "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500":
          theme === "dark",
      }
    )}
  />
</div>
