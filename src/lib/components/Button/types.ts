export type ButtonProps = {
  children?: any;
  loader?: any;
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  clickable?: boolean;
  circle?: boolean;
  type?: "button" | "submit" | "reset";
  color?: string;
  href?: string;
  radius?: string;
  variant?: string;
  size?: string;
  id?: string;
  onClick?: (e: MouseEvent) => void;
  class?: string;
};
