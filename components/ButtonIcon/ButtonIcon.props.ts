import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import up from "@/public/up.svg";
import close from "@/public/close-menu.svg";
import menu from "@/public/menu.svg";

export const icons = {
  up,
  close,
  menu
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  icon: IconName;
  appearance: "primary" | "white";
}