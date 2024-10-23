<script lang="ts">
  import cx from "classnames";

  type ButtonVariant = "base" | "primary" | "secondary";

  export let variant: ButtonVariant = "base";
  export let label = "";
  export let loading = false;

  const btnClass = cx(
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
  );
</script>

<button type="button" class={btnClass}>
  {label}
  <slot />
</button>

<style scoped>
</style>
