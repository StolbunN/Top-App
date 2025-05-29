import { ReactNode } from "react";

export interface HeadlingProps {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}