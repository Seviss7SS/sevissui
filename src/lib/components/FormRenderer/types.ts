export interface Field {
  name: string;
  defaultValue?: string;
  label?: string;
  fieldType: "input" | "textarea" | "select" | "combobox" | "checkbox";
  props?: any;
  required?: boolean;
  items?: { value: string; label: string }[];
}
