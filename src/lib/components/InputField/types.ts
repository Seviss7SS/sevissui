import type {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
} from "svelte/elements";

export type InputFieldProps = {
  left?: any;
  right?: any;
  id?: string;
  name?: string;
  type?: HTMLInputTypeAttribute | null | undefined;
  required?: boolean;
  readonly?: boolean;
  placeholder?: string;
  class?: string;
  label?: string;
  centered?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onInput?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  variant?: string;
  radius?: string;
  align?: string;
  value?: string;
  error?: string;
};
