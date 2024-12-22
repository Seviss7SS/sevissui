import type { BoxProps } from "../Box/types";

export interface CardProps extends BoxProps {
  children?: any;
  href?: string;
  onClick?: (e: MouseEvent) => void;
  class?: string;
}
