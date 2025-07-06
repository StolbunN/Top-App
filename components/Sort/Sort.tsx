"use client";

import { SortEnum, SortProps } from "./Sort.props";
import styles from "./Sort.module.css";
import cn from "classnames";
import SortIcon from "@/public/sort.svg";

export function Sort({ sort, setSortAction, className, ...props}: SortProps) {

  

  return (
    <div className={cn(styles.sort, className)} {...props}>
      <div 
        className={cn(styles.item, {
          [styles.active]: sort == SortEnum.Rating
        })}
        onClick={() => setSortAction(SortEnum.Rating)}
      >
        <SortIcon className={styles.icon}/>
        <span className={styles.text}>По рейтингу</span>
      </div>
      <div 
        className={cn(styles.item, {
          [styles.active]: sort == SortEnum.Price
        })}
        onClick={() => setSortAction(SortEnum.Price)}
      >
        <SortIcon className={styles.icon}/>
        <span className={styles.text}>По цене</span>
      </div>
    </div>
  );
}