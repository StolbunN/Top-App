import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import cn from "classnames";

export function Card({ children, className, color = "white", ...props }: CardProps) {
  return (
    <div 
      className={cn(styles.card, className, {
        [styles.orange]: color == "orange"
      })}
      {...props}>
      {children}
    </div>
  );
}