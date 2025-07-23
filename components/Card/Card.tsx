import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Card = forwardRef(({ children, className, colorCard = "white", ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      className={cn(styles.card, className, {
        [styles.orange]: colorCard == "orange"
      })}
      {...props}>
      {children}
    </div>
  );
});

Card.displayName = "Card";