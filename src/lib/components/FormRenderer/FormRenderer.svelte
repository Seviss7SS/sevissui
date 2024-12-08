<script lang="ts">
  import type { FormEventHandler } from "svelte/elements";
  import cx from "classnames";
  import Button from "$lib/components/Button/Button.svelte";
  import type { Field } from "./types.ts";
  import Fields from "./Fields.svelte";

  export let fields: Field[] = [];
  export let method: "post" | "get" = "post";
  export let gap: string = "gap-md";
  export let cols: string = "grid-cols-1";
  export let errors: { [name: string]: string } = {};
  export let handleSubmit: FormEventHandler<HTMLFormElement> | undefined =
    undefined;
  export let fieldsOnly: boolean = false;

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

{#if fieldsOnly}
  <Fields {fields} {errors} />
{:else}
  <form {method} on:submit={onSubmit} class={formClass}>
    <slot name="top" />
    <Fields {fields} {errors} />
    <slot />
    <slot name="submit">
      <Button type="submit" label="Submit" />
    </slot>
  </form>
{/if}
