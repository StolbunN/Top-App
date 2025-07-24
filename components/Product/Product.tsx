"use client";

import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";
import { Rating } from "../Rating/Rating";
import Image from "next/image";
import { Paragraph } from "../Paragraph/Paragraph";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Tag } from "../Tag/Tag";
import { declensionOfNum, errorPathToImg, priceRub } from "@/helpers/helpers";
import { Divider } from "../Divider/Divider";
import { Review } from "../Review/Review";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from "motion/react";

const ProductWithRef = forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>) => {

  const [isOpenReviews, setIsOpenReviews] = useState<boolean>(false);
  const myRef = useRef<HTMLDivElement>(null);

  const scrollToRef = () => {
    setIsOpenReviews(true);
    myRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={styles["product-wrapper"]} ref={ref}>
      <Card className={cn(styles.product, className)} {...props}>
        <div className={styles.logo}><Image src={errorPathToImg(product.image)} alt={product.title} width={70} height={70} /></div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {priceRub(product.price)}
          <Tag color="green" className={styles.oldPrice}>{priceRub(product.price - product.oldPrice)}</Tag>
        </div>
        <div className={styles.credit}>{priceRub(product.credit)}/<span className={styles.month}>мес</span></div>
        <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
        <div className={styles.categories}>{product.categories.map(category => <Tag key={category} color="ghost" className={styles.tag}>{category}</Tag>)}</div>
        <div className={styles["price-title"]}>цена</div>
        <div className={styles["credit-title"]}>в кредит</div>
        <div className={styles["review-count"]}><a href="#ref" onClick={scrollToRef}>{product.reviewCount} {declensionOfNum(product.reviewCount, ["отзывов", "отзыв", "отзыва"])}</a></div>
        <Divider className={styles.line} />
        <div className={styles.description}>{product.description}</div>
        <div className={cn(styles.characteristics, {
          [styles.long]: (!product.advantages && !product.disadvantages)
        })}>
          <ul className={styles.list}>
            {product.characteristics.map(item => (<li key={item.name} className={styles.characteristic}>
              <span className={styles["characteristic__name"]}>{item.name}</span>
              <span className={styles["characteristic__dot"]}></span>
              <span className={styles["characteristic__value"]}>{item.value}</span>
            </li>))}
          </ul>
          <div className={styles.tags}>
            {product.tags.map(tag => <Tag key={tag} color="ghost" className={styles.tag}>{tag}</Tag>)}
          </div>
        </div>
        <div className={styles.criteria}>
          {product.advantages && <div className={styles.advantages}>
            <h4 className={styles["criteria__title"]}>Преимущества</h4>
            <Paragraph size="s">{product.advantages}</Paragraph>
          </div>}
          {product.disadvantages && <div className={styles.disadvantages}>
            <h4 className={styles["criteria__title"]}>Недостатки</h4>
            <Paragraph size="s">{product.disadvantages}</Paragraph>
          </div>}
        </div>
        <Divider className={cn(styles.line, styles.line2)} />
        <div className={styles.actions}>
          <Button appearance="primary">Узнать подробнее</Button>
          <Button
            appearance="ghost"
            arrow={isOpenReviews ? "down" : "right"}
            onClick={() => setIsOpenReviews(!isOpenReviews)}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>
      <Card 
        colorCard="orange"
        className={cn(styles.reviews, {
          [styles.hidden]: !isOpenReviews,
          [styles.visible]: isOpenReviews,
        })}
        ref={myRef}
      >
        {product.reviews.map(rewiew => <Review key={rewiew._id} review={rewiew}/>)}
        <ReviewForm productId={product._id}/>
      </Card>
    </div>
  );
});

ProductWithRef.displayName = "Product";

export const Product = motion.create(ProductWithRef);