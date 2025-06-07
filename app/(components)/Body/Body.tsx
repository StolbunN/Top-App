import { BodyProps } from "./Body.props";
import styles from "./Body.module.css";
import cn from "classnames";

export function Body({children, className, ...props}: BodyProps) {
  return (
    <main {...props} className={cn(styles.body, className)}>
      {children}
    </main>
  );
}