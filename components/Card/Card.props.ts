import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  colorCard?: "white" | "orange";
  children: ReactNode;
}