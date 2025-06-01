import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  size?: "s" | "l";
  href?: string,
  color?: "grey" | "green" | "ghost" | "red" | "primary";
  children: ReactNode;
}