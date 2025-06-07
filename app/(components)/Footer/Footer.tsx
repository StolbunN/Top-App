import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";

export function Footer({className, ...props}: FooterProps) {
  return (
    <footer {...props} className={cn(styles.footer, className)}>
      Footer
    </footer>
  );
}