import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";

export function Sidebar({className, ...props}: SidebarProps) {
  return (
    <nav {...props} className={cn(styles.Sidebar, className)}>
      Sidebar
    </nav>
  );
}