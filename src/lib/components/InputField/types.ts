import type {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
} from "svelte/elements";

export type InputFieldProps = {
  id?: string;
  name?: string;
  type?: HTMLInputTypeAttribute | null | undefined;
  required?: boolean;
  readonly?: boolean;
  placeholder?: string;
  label?: string;
  centered: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onInput: ChangeEventHandler<HTMLInputElement>;
  variant: string;
  radius: string;
  align: string;
  value: string;
};
