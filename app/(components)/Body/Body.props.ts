import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface BodyProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
  children: ReactNode;
}