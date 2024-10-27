<script lang="ts">
  import { VARIANTS } from "./variants.js";

  export let variant: keyof typeof VARIANTS = "variant1";
</script>

{#if VARIANTS[variant]}
  <svelte:component this={VARIANTS[variant]} {...$$props}>
    <slot>Hello world</slot>
  </svelte:component>
{/if}
