import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";

export function Paragraph({children, size = "m", className, ...props}: ParagraphProps) {
  return (
    <p {...props} className={cn(styles.text, className, styles[size])}>
      {children}
    </p>
  );
}