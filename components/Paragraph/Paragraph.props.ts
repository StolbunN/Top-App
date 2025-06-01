import { HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>{
  size?: "s" | "m" | "l";
  children: ReactNode;
}