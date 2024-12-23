import type { SelectProps as BitsUiSelectProps, Selected } from "bits-ui";

export type SelectProps = {
  items?: { value: string; label: string }[];
  name?: string;
  label?: string;
  placeholder?: string;
  value?: Selected<string>;
  onChange?: BitsUiSelectProps<string>["onSelectedChange"];
};
