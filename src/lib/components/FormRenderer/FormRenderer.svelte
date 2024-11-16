<script lang="ts">
  import type { FormEventHandler } from "svelte/elements";
  import cx from "classnames";

  import InputField from "../InputField/InputField.svelte";
  import type { InputFieldProps } from "../InputField/types.ts";
  import Button from "../Button/Button.svelte";

  export let fields: Partial<InputFieldProps>[] = [];
  export let handleSubmit: FormEventHandler<HTMLFormElement> | undefined =
    undefined;

  $: formClass = cx("grid grid-cols-1 gap-md", {
    [$$props.class]: $$props.class,
  });
</script>

<form on:submit={handleSubmit} class={formClass}>
  {#each fields as field}
    <InputField {...field} />
  {/each}
  <slot name="submit">
    <Button type="submit" label="Submit" />
  </slot>
</form>
