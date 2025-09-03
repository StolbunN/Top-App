"use client";

import styles from "./Menu.module.css";
import cn from "classnames";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { MenuItem, PageItem } from "@/interfaces/menu.interface";
import { MenuProps } from "./Menu.props";
import { firstLevelMenu } from "@/helpers/helpers";
import Link from "next/link";
import { KeyboardEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

export function Menu({ menuData, ...props }: MenuProps) {
  const initialMenu = menuData;
  const [category, setCategory] = useState<TopLevelCategory>(TopLevelCategory.Courses);
  const [menu, setMenu] = useState<MenuItem[][]>(initialMenu);
  const path = usePathname();
  const [active, setActive] = useState(false);

  const variants = {
    visible: {
      opacity: 1,
      height: "max-content",
      marginBottom: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      },
      transitionEnd: {
        marginBottom: 10,
      },
    },
    hidden: {
      opacity: 0,
      height: 0,
      marginBottom: 0,
    },
  };

  const variantsChild = {
    visible: {
      opacity: 1,
      height: "max-content",
      marginBottom: 10,
    },
    hidden: {
      opacity: 0,
      height: 0,
      overflow: "hidden",
      marginBottom: 0,
    },
  };

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

  const openSecondLevelkey = (key: KeyboardEvent, secondCategory: string) => {
    if(key.code == "Space" || key.code == "Enter") {
      key.preventDefault();
      openSecondLevelMenu(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <ul className={styles["first-level__list"]}>
        {firstLevelMenu.map(menuItem => {
          return (
            <li key={menuItem.route} className={cn(styles["first-level__item"], {
                  [styles["first-level__item--active"]]: menuItem.id == category
                })}
                onClick={() => setCategory(menuItem.id)}
                onMouseEnter={() => setActive(true)}
                >
              <div>
                <div
                  className={styles["first-level__item-content"]}
                  tabIndex={0}
                >
                  {menuItem.icon}
                  <span>{menuItem.name}</span>
                </div>
              </div>
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
              <div
                tabIndex={0}
                onKeyDown={(key: KeyboardEvent) => openSecondLevelkey(key, menuItem._id.secondCategory)}
              >{menuItem._id.secondCategory}</div>
              <motion.ul
                layout={true}
                initial={menuItem.isOpened ? "visible" : "hidden"}
                animate={menuItem.isOpened ? "visible" : "hidden"}
                variants={variants}
                className={styles["third-level__list"]}>
                {buildThirdLevel(menuItem.pages, route, menuItem.isOpened ?? false)}
              </motion.ul>
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return (
      <>
        {pages.map((page: PageItem) => {
          return (
            <motion.li
              variants={variantsChild}
              key={page._id}
              className={styles["third-level__item"]}>
              <Link
                href={`/${route}/${page.alias}`}
                className={cn(styles["third-level__link"], {
                  [styles["third-level__link--active"]]: `/${route}/${page.alias}` == path
                })}
                prefetch={active ? null : false}
                onMouseEnter={() => setActive(true)}
                tabIndex={isOpened ? 0 : -1}
              >{page.category}</Link>
            </motion.li>
          );
        })}
      </>
    );
  };
  return (
    <nav {...props} className={cn(styles.menu)}>
      {buildFirstLevel()}
    </nav>
  );
}