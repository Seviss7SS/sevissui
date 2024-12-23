export type BoxProps = {
  children?: any;
  class?: string;
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: (e: MouseEvent) => void;
  id?: string;
  type?: "button" | "submit" | "reset";
  radius?: string;
  clickable?: boolean;
  method?:
    | "get"
    | "post"
    | "dialog"
    | "DIALOG"
    | "GET"
    | "POST"
    | null
    | undefined;
  target?: string;
  action?: string;
  component?: "a" | "div" | "button" | "form";
};
