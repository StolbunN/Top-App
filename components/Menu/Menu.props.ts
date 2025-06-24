import { MenuItem } from "@/interfaces/menu.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
  menuData: MenuItem[][];
}