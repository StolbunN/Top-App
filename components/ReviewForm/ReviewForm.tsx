"use client";
import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import CloseIcon from "@/public/close.svg";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import { API } from "@/app/api";
import { useState } from "react";

export function ReviewForm({ productId, className, ...props }: ReviewFormProps) {

  const {register, handleSubmit, control, reset, formState: {errors}} = useForm<IReviewForm>({
    mode: "onChange"
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit: SubmitHandler<IReviewForm> = async (formData: IReviewForm) => {
    try {
      const res = await fetch(API.review.createDemo, {
      method: "POST",
      body: JSON.stringify({
        ...formData,
        productId,
      }),
      headers: new Headers({"content-type": "application/json"})
      });
      const data: IReviewSentResponse = await res.json();
      console.log(data);
      if(typeof data.message === "string") {
        setIsSuccess(true);
        reset();
      } else {
        setError("Что-то пошло не так");
      }
    } catch (e) {
      if(e instanceof Error) {
        setError(e.message);
      }
    }

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles["review-form"], className)} {...props}>
          <Input
            className={styles["input-field"]}
            placeholder="Имя"
            {...register("name", {required: "Имя обязательно"})}
            error={errors.name}
          />
          <Input
            className={styles["input-field"]}
            placeholder="Заголовок отзыва"
            {...register("title", {required:"Заголовок обязательно"})}
            error={errors.title}
          />
        <div className={styles.rating}>
          <span className={cn({
            [styles["error-field"]]: errors.rating
          })}>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{required: true}}
            render={({field}) => (
              <Rating rating={field.value} isEditable setRating={field.onChange} error={errors.rating}/>
            )}
          />
        </div>
          <Textarea
            className={styles["textarea-field"]}
            placeholder="Текст отзыва"
            {...register("description", {required: "Текст обязательно"})}
            error={errors.description}
          />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      {isSuccess && <div className={cn(styles.success, styles.panel)}>
        <h4 className={styles.title}>Ваш отзыв отправлен</h4>
        <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)}/>
        <div className={styles.text}>Спасибо, ваш отзыв будет опубликован после проверки.</div>
      </div>}
      {error && <div className={cn(styles.error, styles.panel)}>
        <div className={styles.text}>Что-то пошло не так, попробуйте обновить страницу.</div>
        <CloseIcon className={styles.close} onClick={() => setError(undefined)}/>
      </div>}
    </form>
  );
}