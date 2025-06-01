import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export function Tag({children, size = "s", href, color = "ghost", className, ...props}: TagProps) {
  return (
    <div 
      {...props}
      className={cn(styles.tag, className, styles[size], styles[color])}>
      {href
      ? <a href={href}>{children}</a>
      : <>{children}</>
      }
    </div>
  );
}