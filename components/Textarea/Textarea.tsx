import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import cn from "classnames";
import {notoSans} from "@/font/font";

export function Textarea({ className, ...props}: TextareaProps) {
  return (
    <textarea className={cn(styles.textarea, notoSans, className)} {...props}/>
  );
}