import { ReviewProps } from "./Review.props";
import styles from "./Review.module.css";
import cn from "classnames";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import UserIcon from "@/public/user.svg";
import { Rating } from "../Rating/Rating";
import { Divider } from "../Divider/Divider";

export function Review({ review, className, ...props }: ReviewProps) {

  const { name, title, createdAt, rating, description } = review;

  return (
    <div {...props} className={cn(styles.review, className)}>
      <UserIcon className={styles.user} />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>{format(createdAt, "dd MMMM yyyy", { locale: ru })}</div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
      <Divider className={styles.line}/>
    </div>
  );
}