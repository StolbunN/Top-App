import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import cn from "classnames";

export function Card({ children, className, colorCard = "white", ...props }: CardProps) {
  return (
    <div 
      className={cn(styles.card, className, {
        [styles.orange]: colorCard == "orange"
      })}
      {...props}>
      {children}
    </div>
  );
}