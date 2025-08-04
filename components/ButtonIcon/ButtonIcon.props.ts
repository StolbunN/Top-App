import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import up from "@/public/up.svg";

export const icons = {
  up,
  // close,
  // burger
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  icon: IconName;
  appearance: "primary" | "white";
}