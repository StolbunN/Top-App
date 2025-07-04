import { TopPageComponentsProps } from "./TopPageComponents.props";
import styles from "./TopPageComponents.module.css";
import { Heading } from "../Heading/Heading";
import { Tag } from "../Tag/Tag";
import { HhData } from "../HhData/HhData";
import { HhDataProps } from "../HhData/HhData.props";

export function TopPageComponents({firstCategory, page, products}: TopPageComponentsProps) {
  return (
    <div className={styles["top-page"]}>
      <header className={styles["header"]}>
        <Heading tag="h1">{page.title}</Heading>
        {products && <Tag color="grey" size="l">{products.length}</Tag>}
        <div>Сортировка</div>
      </header>
      <div className={styles["content"]}>
        {products && products.map(product => <div key={product._id}>{product.title}</div>)}
      </div>
      {firstCategory == 0 && <div className={styles["hh-wrapper"]}>
          <Heading tag="h2" className={styles["hh-title"]}>
            <span>Вакансии - {page.category}</span>
            <Tag color="red" size="l" className={styles.tag}>hh.ru</Tag>
          </Heading>
        <HhData {...page.hh as HhDataProps}/>
      </div>}
    </div>
  );
}