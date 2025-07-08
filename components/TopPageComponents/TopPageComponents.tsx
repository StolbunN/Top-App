"use client";

import { TopPageComponentsProps } from "./TopPageComponents.props";
import styles from "./TopPageComponents.module.css";
import { Heading } from "../Heading/Heading";
import { Tag } from "../Tag/Tag";
import { HhData } from "../HhData/HhData";
import { Advantages } from "../Advantages/Advantages";
import parse from "html-react-parser";
import { Sort } from "../Sort/Sort";
import { SortEnum } from "../Sort/Sort.props";
import { useReducer } from "react";
import { initSortState, sortReducer } from "../Sort/sort.reducer";
import { Product } from "../Product/Product";

export function TopPageComponents({firstCategory, page, products}: TopPageComponentsProps) {

  const [{sort, products: sortedProducts }, dispatch] = useReducer(sortReducer, {sort: SortEnum.Rating, products}, initSortState);


  const setSort = (sort: SortEnum) => {
    dispatch({type: sort});
  };

  return (
    <div className={styles["top-page"]}>
      <header className={styles["header"]}>
        <Heading tag="h1">{page.title}</Heading>
        {sortedProducts && <Tag color="grey" size="l">{products.length}</Tag>}
        <Sort sort={sort} setSortAction={setSort}/>
      </header>
      <div className={styles["products"]}>
        {sortedProducts && sortedProducts.map(product => <Product key={product._id} product={product}/>)}
      </div>
      {firstCategory == 0 && page.hh && <div className={styles["hh-wrapper"]}>
          <Heading tag="h2" className={styles["hh-title"]}>
            <span>Вакансии - {page.category}</span>
            <Tag color="red" size="l" className={styles["hh-tag"]}>hh.ru</Tag>
          </Heading>
        <HhData {...page.hh}/>
      </div>}
      {page.advantages && page.advantages.length > 0 && <div className={styles["advantages-wrapper"]}>
        <Advantages advantages={page.advantages}/>
      </div>}
      {page.seoText && <div className={styles.seo}>{parse(page.seoText)}</div>}
      <Heading tag="h2">Получаемые навыки</Heading>
      {page.tags.length > 0 && <div className={styles.tags}>
        {page.tags.map(tag => <Tag key={tag} color="primary" className={styles.tag}>{tag}</Tag>)}
      </div>}
    </div>
  );
}