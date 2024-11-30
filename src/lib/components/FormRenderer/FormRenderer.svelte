<script lang="ts">
  import type { FormEventHandler } from "svelte/elements";
  import cx from "classnames";

  import InputField from "$lib/components/InputField/InputField.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import Select from "$lib/components/Select/Select.svelte";
  import Textarea from "../Textarea/Textarea.svelte";
  import Checkbox from "../Checkbox/Checkbox.svelte";

  interface Field {
    name: string;
    defaultValue?: string;
    label?: string;
    fieldType: "input" | "textarea" | "select" | "combobox" | "checkbox";
    props?: any;
    required?: boolean;
    items?: { value: string; label: string }[];
  }

  export let fields: Field[] = [];
  export let method: "post" | "get" = "post";
  export let gap: string = "gap-md";
  export let cols: string = "grid-cols-1";
  export let errors: { [name: string]: string } = {};
  export let handleSubmit: FormEventHandler<HTMLFormElement> | undefined =
    undefined;

  const onSubmit: typeof handleSubmit = (e) => {
    if (typeof errors === "object" && Object.keys(errors || {}).length > 0) {
      e.preventDefault();
      return;
    }

    handleSubmit?.(e);
  };

  $: formClass = cx("grid", {
    [cols]: cols,
    [gap]: gap,
    [$$props.class]: $$props.class,
  });
</script>

<form {method} on:submit={onSubmit} class={formClass}>
  <slot name="top" />
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
  <slot />
  <slot name="submit">
    <Button type="submit" label="Submit" />
  </slot>
</form>
