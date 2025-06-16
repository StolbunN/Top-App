import styles from "./Menu.module.css";
import cn from "classnames";
import { getMenu } from "@/api/menu";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import CoursesIcon from "@/public/courses.svg";
import ServicesIcon from "@/public/services.svg";
import BooksIcon from "@/public/books.svg";
import ProductsIcon from "@/public/products.svg";

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: "courses", name: "Курсы", icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
  { route: "services", name: "Сервисы", icon: <ServicesIcon/>, id: TopLevelCategory.Services},
  { route: "books", name: "Книги", icon: <BooksIcon/>, id: TopLevelCategory.Books},
  { route: "products", name: "Товары", icon: <ProductsIcon/>, id: TopLevelCategory.Products}
];

export async function Menu({ ...props }) {
  const menu = await getMenu(TopLevelCategory.Courses);

  const buildFirstLevel = () => {
    return (
      <ul className={styles["first-level__list"]}>
        {firstLevelMenu.map(menuItem => {
          return (
            <li key={menuItem.route} className={styles["first-level__item"]}>
              <a href={`/${menuItem.route}`} className={cn(styles["first-level__link"], {
                [styles["first-level__link--active"]]: menuItem.id == TopLevelCategory.Courses
              })}>
                <div className={styles["first-level__link-content"]}>
                  {menuItem.icon}
                  <span>{menuItem.name}</span>
                </div>
              </a>
              {menuItem.id == TopLevelCategory.Courses && buildSecondLevel(menuItem.route)}
            </li>
          );
        })}
      </ul>
    );
  };

  const buildSecondLevel = (route: string) => {
    return (
      <ul className={styles["second-level__list"]}>
        {menu.map(menuItem => {
          return (
            <li key={menuItem._id.secondCategory} className={cn(styles["second-level__item"], {
              [styles["second-level__item--opened"]]: menuItem.isOpened
            })}>
              <span>{menuItem._id.secondCategory}</span>
              {buildThirdLevel(menuItem.pages, route)}
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      <ul className={styles["third-level__list"]}>
        {pages.map(page => {
          return (
            <li key={page._id} className={styles["third-level__item"]}>
              <a href={`/${route}/${page.alias}`} className={cn(styles["third-level__link"], {
                [styles["third-level__link--active"]]: false
              })}>{page.category}</a>
            </li>
          );
        })}
      </ul>
    );
  };

  console.log(menu);
  return (
    <nav {...props} className={cn(styles.menu)}>
      {buildFirstLevel()}
      <hr />
      <div>{menu.length}</div>
    </nav>
  );
}