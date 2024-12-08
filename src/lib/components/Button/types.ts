export type ButtonProps = {
  children?: any;
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  clickable?: boolean;
  circle?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  radius?: string;
  variant?: string;
  size?: string;
  id?: string;
  onClick?: (e: MouseEvent) => void;
  class?: string;
};
