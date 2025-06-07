import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import {format} from "date-fns";

export function Footer({className, ...props}: FooterProps) {
  return (
    <footer {...props} className={cn(styles.footer, className)}>
      <div className={styles.container}>
        <span className={styles.copyright}>Skillbridge &copy; 2020 - {format(new Date(), "yyyy")} Все права защищены</span>
        <a href="#">Пользовательское соглашение</a>
        <a href="#">Политика конфиденциальности</a>
      </div>
    </footer>
  );
}