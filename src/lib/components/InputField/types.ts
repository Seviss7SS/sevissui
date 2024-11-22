import type { ChangeEventHandler } from "svelte/elements";

export type InputFieldProps = {
  id?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onInput: ChangeEventHandler<HTMLInputElement>;
  variant: string;
  radius: string;
  align: string;
  value: string;
};
