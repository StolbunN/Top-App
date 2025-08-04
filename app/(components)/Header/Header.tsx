"use client";

import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import LogoIcon from "@/public/logo.svg";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { Menu } from "@/components";
import { usePathname } from "next/navigation";
import { Burger } from "@/components/Burger/Burger";

export function Header({ menuData, className, ...props }: HeaderProps) {

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpened(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.overflow = isOpened ? "hidden" : "";
    }

    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "";
      }
    };
  }, [isOpened]);

  const variants = {
    opened: {
      x: 0
    },
    closed: {
      x: "100%"
    }
  };

  return (
    <header {...props} className={cn(styles.header, className)}>
      <div className={styles["header-top"]}>
        <LogoIcon />
        <Burger
          onClick={() => setIsOpened(!isOpened)}
          isOpened={isOpened}
          className={styles.burger}
        />
      </div>
      <motion.div
        className={styles["mobile-menu"]}
        initial="closed"
        animate={isOpened ? "opened" : "closed"}
        variants={variants}
      >
        <Menu menuData={menuData} />
      </motion.div>
    </header>
  );
}