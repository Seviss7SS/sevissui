<script lang="ts">
  import InputField from "$lib/components/InputField/InputField.svelte";
  import Select from "$lib/components/Select/Select.svelte";
  import Textarea from "$lib/components/Textarea/Textarea.svelte";
  import Checkbox from "$lib/components/Checkbox/Checkbox.svelte";
  import type { Field } from "./types.ts";

  export let fields: Field[] = [];
  export let errors: { [name: string]: string } = {};
</script>

{#each fields as field}
  {#if field.fieldType === "select"}
    <Select
      {...field.props}
      required={field.required}
      label={field.label}
      error={errors[field.name]}
      name={field.name}
      value={field.defaultValue}
      items={field.items}
    />
  {:else if field.fieldType === "textarea"}
    <Textarea
      {...field.props}
      required={field.required}
      label={field.label}
      error={errors[field.name]}
      name={field.name}
      value={field.defaultValue}
    />
  {:else if field.fieldType === "checkbox"}
    <Checkbox
      {...field.props}
      required={field.required}
      label={field.label}
      error={errors[field.name]}
      name={field.name}
      value={field.defaultValue}
    />
  {:else}
    <InputField
      {...field.props}
      required={field.required}
      label={field.label}
      error={errors[field.name]}
      name={field.name}
      value={field.defaultValue}
    />
  {/if}
{/each}
