import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import cn from "classnames";
import {notoSans} from "@/font/font";

export function Textarea({ error, className, ...props}: TextareaProps) {
  return (
    <div className={cn(styles["textarea-wrapper"], className)}>
      <textarea className={cn(styles.textarea, notoSans, {
        [styles.error]: error
      })} {...props}/>
      {error && <span>{error.message}</span>}
    </div>
  );
}