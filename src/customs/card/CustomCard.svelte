<script lang="ts">
  import { VARIANTS } from "./variants.ts";

  export let variant: keyof typeof VARIANTS = "variant1";
</script>

{#if VARIANTS[variant]}
  <svelte:component this={VARIANTS[variant]}>
    <slot>
      <div class="bg-red-500 h-10 w-10" />
    </slot>
  </svelte:component>
{/if}
