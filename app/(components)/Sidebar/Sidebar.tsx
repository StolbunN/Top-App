import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import { getMenu } from "@/api/menu";

export async function Sidebar({className, ...props}: SidebarProps) {
  const menu = await getMenu(0);
  return (
    <nav {...props} className={cn(styles.Sidebar, className)}>
      <ul>
        {menu && menu.map(item => {
          return (<li>{item._id.secondCategory}</li>)
        })}
      </ul>
      <hr />
      <div>{menu.length}</div>
    </nav>
  );
}