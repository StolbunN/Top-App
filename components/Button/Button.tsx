import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "@/public/arrow.svg";

export function Button({ appearance = "ghost", arrow = "none", children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.ghost]: appearance == "ghost",
      })}
      {...props}
    >
      {children}
      {arrow != "none" && <ArrowIcon className={cn(styles.arrow, {
        [styles.right]: arrow == "right",
        [styles.down]: arrow == "down",
      })}/>}
    </button>
  );
}