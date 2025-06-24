"use client";

import styles from "./Menu.module.css";
import cn from "classnames";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { MenuItem, PageItem } from "@/interfaces/menu.interface";
import { MenuProps } from "./Menu.props";
import { firstLevelMenu } from "@/helpers/helpers";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Menu({ menuData, ...props }: MenuProps) {
  const initialMenu = menuData;
  const [category, setCategory] = useState<TopLevelCategory>(TopLevelCategory.Courses);
  const [menu, setMenu] = useState<MenuItem[][]>(initialMenu);
  const path = usePathname();
  const [active, setActive] = useState(false);

  const openSecondLevelMenu = (secondCategory: string) => {
    setMenu(menu.map(menuCategory => {
      menuCategory.map(menuItem => {
        if (menuItem._id.secondCategory == secondCategory) {
          menuItem.isOpened = !menuItem.isOpened;
        }
        return menuItem;
      });
      return menuCategory;
    }));
  };

  const buildFirstLevel = () => {
    return (
      <ul className={styles["first-level__list"]}>
        {firstLevelMenu.map(menuItem => {
          return (
            <li key={menuItem.route} className={styles["first-level__item"]}>
              <Link
                href={`/${menuItem.route}`}
                className={cn(styles["first-level__link"], {
                  [styles["first-level__link--active"]]: menuItem.id == category
                })}
                onClick={() => setCategory(menuItem.id)}
                prefetch={active ? null : false}
                onMouseEnter={() => setActive(true)}
              >
                <div className={styles["first-level__link-content"]}>
                  {menuItem.icon}
                  <span>{menuItem.name}</span>
                </div>
              </Link>
              {(menuItem.id == category && menu[category].length > 0) && buildSecondLevel(menuItem.route)}
            </li>
          );
        })}
      </ul>
    );
  };

  const buildSecondLevel = (route: string) => {
    return (
      <ul className={styles["second-level__list"]}>
        {menu[category].map(menuItem => {
          if (menuItem.pages.map(m => m.alias).includes(path.split("/")[2])) {
            menuItem.isOpened = true;
          }
          return (
            <li
              key={menuItem._id.secondCategory}
              className={styles["second-level__item"]}
              onClick={() => openSecondLevelMenu(menuItem._id.secondCategory)}
            >
              <span>{menuItem._id.secondCategory}</span>
              <div className={cn(styles["third-level__list-wrapper"], {
                [styles["second-level__item--opened"]]: menuItem.isOpened
              })}>
                {buildThirdLevel(menuItem.pages, route)}
              </div>
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
              <Link
                href={`/${route}/${page.alias}`}
                className={cn(styles["third-level__link"], {
                [styles["third-level__link--active"]]: `/${route}/${page.alias}` == path
                })}
                prefetch={active ? null : false}
                onMouseEnter={() => setActive(true)}
              >{page.category}</Link>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <nav {...props} className={cn(styles.menu)}>
      {buildFirstLevel()}
      <hr />
      <div>{menu[category].length}</div>
    </nav>
  );
}