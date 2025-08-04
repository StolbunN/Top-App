import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";

export function Sidebar({className, children, ...props}: SidebarProps) {
  return (
    <div {...props} className={cn(styles.Sidebar, className)}>
      {children}
    </div>
  );
}