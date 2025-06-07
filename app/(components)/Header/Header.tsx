import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";

export function Header({className, ...props}: HeaderProps) {
  return (
    <header {...props} className={cn(styles.header, className)}>
      Header
    </header>
  );
}