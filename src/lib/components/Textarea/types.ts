import type { ChangeEventHandler } from "svelte/elements";

export type TextareaProps = {
  value?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  rows?: number | string;
  label?: string;
  containerClass?: string;
  class?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onInput?: ChangeEventHandler<HTMLTextAreaElement>;
};
