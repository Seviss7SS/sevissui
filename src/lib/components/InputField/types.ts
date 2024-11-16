import type { HTMLInputTypeAttribute } from "svelte/elements";

export type InputFieldProps = {
  inputType?: HTMLInputTypeAttribute | null;
  id?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  label?: string;
  variant: string;
  radius: string;
  align: string;
};
