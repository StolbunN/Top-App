"use client";
import { useScrollY } from "@/hooks/useScrollY";
import styles from "./Up.module.css";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

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
    <motion.div
      className={styles.up}
      initial={{opacity: 0}}
      animate={controls}
    >
      <ButtonIcon appearance="primary" icon="up" onClick={scrollToTop}/>
    </motion.div>
  );
}