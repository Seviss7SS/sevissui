<script lang="ts">
  import { VARIANTS } from "./variants.js";

  export let variant: keyof typeof VARIANTS = "variant1";
</script>

{#if VARIANTS[variant]}
  <svelte:component this={VARIANTS[variant]} {...$$props}>
    <slot slot="content">
      <div class="text-black p-6">Hello world</div>
    </slot>
  </svelte:component>
{/if}
