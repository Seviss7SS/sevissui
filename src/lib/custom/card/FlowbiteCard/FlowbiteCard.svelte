<script lang="ts">
  // @ts-nocheck
  import { VARIANTS } from "./config.js";

  export let variant: keyof typeof VARIANTS = "default";
</script>

{#if VARIANTS[variant]}
  <svelte:component this={VARIANTS[variant]} {...$$props}>
    <slot>
      <div class="text-black p-lg">Hello world</div>
    </slot>
  </svelte:component>
{/if}
