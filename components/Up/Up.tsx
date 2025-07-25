"use client";
import { useScrollY } from "@/hooks/useScrollY";
import styles from "./Up.module.css";
import UpIcon from "@/public/up.svg";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

export function Up() {

  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({opacity: y / (window.document.body.scrollHeight / 4)});
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.button
      className={styles.up}
      onClick={scrollToTop}
      initial={{opacity: 0}}
      animate={controls}
    >
      <UpIcon/>
    </motion.button>
  );
}