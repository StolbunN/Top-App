import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

export function Button({ appearance = "ghost", children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.ghost]: appearance == "ghost",
      })}
      {...props}
    >{children}</button>
  );
}