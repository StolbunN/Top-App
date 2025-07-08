import { DividerProps } from "./Divider.props";
import styles from "./Divider.module.css";
import cn from "classnames";

export function Divider({ className, ...props}: DividerProps) {
  return (
    <hr className={cn(styles.hr, className)} {...props}/>
  );
}