"use client";
import { JSX, KeyboardEvent, useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import StarIcon from "@/public/star.svg";
import cn from "classnames";

export function Rating({ isEditable = false, rating, setRating, ...props }: RatingProps) {

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const changeRating = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const displayRating = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const handleSpace = (e: KeyboardEvent<HTMLSpanElement>, i: number) => {
    if(e.code != "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  const constructRating = (currentRating: number) => {
    const updateRating = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
          key={i}
          className={cn({
            [styles.filled]: i < currentRating
          })}
        />
      );
    });
    setRatingArray(updateRating);
  };

  return (
    <div {...props} className={cn(styles.stars, {
      [styles.editable]: isEditable
    })}>
      {ratingArray.map((r, i) => (
        <span 
          key={i} 
          className={styles.star}
          tabIndex={isEditable ? 0 : -1}
          onClick={() => changeRating(i + 1)}
          onMouseEnter={() => displayRating(i + 1)}
          onMouseLeave={() => displayRating(rating)}
          onKeyDown={(e: KeyboardEvent<HTMLSpanElement>) => isEditable && handleSpace(e, i + 1)}
        >
          {r}
        </span>))
      }
    </div>
  );
}