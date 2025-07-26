import { DividerProps } from "./Divider.props";
import styles from "./Divider.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Divider = forwardRef(({ className, ...props}: DividerProps, ref: ForwardedRef<HTMLHRElement>) => {
  return (
    <hr className={cn(styles.hr, className)} {...props} ref={ref}/>
  );
});

Divider.displayName = "Divider";