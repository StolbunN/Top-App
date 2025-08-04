import { BurgerProps } from "./Burger.props";
import styles from "./Burger.module.css";
import cn from "classnames";
import { AnimatePresence, motion } from "motion/react";

export function Burger({ isOpened, className, ...props }: BurgerProps) {

  return (
    <AnimatePresence initial={false}>
      <button
        className={cn(styles.button, className)}
        {...props}
      >
        <motion.svg
          width={isOpened ? "19" : "20"}
          height={isOpened ? "19" : "17"}
          viewBox={isOpened ? "0 0 19 19" : "0 0 20 17"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            width={isOpened ? "23" : "20"}
            height="3"
            rx="1.5"
            fill="#ff9500"
            animate={isOpened ? { rotate: -45, x: "-2px", y: "8px" } : { rotate: 0, y: 0, x: 0 }}
          />
          <motion.rect
            y="7"
            width="20"
            height="3"
            rx="1.5"
            fill="#ff9500"
            animate={isOpened ? { scale: 0 } : { scale: 1 }}
          />
          <motion.rect
            y="14"
            width={isOpened ? "23" : "20"}
            height="3"
            rx="1.5"
            fill="#ff9500"
            animate={isOpened ? { rotate: 45, x: "-2px", y: "-6px" } : { rotate: 0, y: 0, x: 0 }}
          />
        </motion.svg>
      </button>
    </AnimatePresence>
  );
}