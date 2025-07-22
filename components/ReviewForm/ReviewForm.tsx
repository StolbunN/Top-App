import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import CloseIcon from "@/public/close.svg";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";

export function ReviewForm({ produstId, className, ...props }: ReviewFormProps) {

  return (
    <>
      <div className={cn(styles["review-form"], className)} {...props}>
        <div className={styles["input-wrapper"]}>
          <Input placeholder="Имя" />
        </div>
        <div className={styles["input-wrapper"]}>
          <Input placeholder="Заголовок отзыва" />
        </div>
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0} />
        </div>
        <div className={styles["textarea-wrapper"]}>
          <Textarea placeholder="Текст отзыва" />
        </div>
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      <div className={styles.success}>
        <h4 className={styles.title}>Ваш отзыв отправлен</h4>
        <CloseIcon className={styles.close}/>
        <div className={styles.text}>Спасибо, ваш отзыв будет опубликован после проверки.</div>
      </div>
    </>
  );
}