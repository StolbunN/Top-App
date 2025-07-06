import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";
import {notoSans} from "@/font/font";

export function Input({ className, ...props}: InputProps) {
  return (
    <input className={cn(styles.input, notoSans, className)} {...props}/>
  );
}