import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";
import {notoSans} from "@/font/font";

export function Input({ error, className, ...props}: InputProps) {
  return (
    <div className={cn(styles["input-wrapper"], className)}>
      <input className={cn(styles.input, notoSans, {
        [styles.error]: error
      })} {...props}/>
      {error && <span>{error.message}</span>}
    </div>
  );
}