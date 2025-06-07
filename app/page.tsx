"use client";

import { Heading, Button, Paragraph, Tag } from "@/components";
import { Rating } from "@/components/Rating/Rating";
import { useState } from "react";


export default function Home() {
  const [rating, setRating] = useState<number>(4);
  return (
    <div>
      <Heading tag="h1">Привет, Мир!</Heading>
      <Heading tag="h2">Привет, Мир!</Heading>
      <Heading tag="h3">Привет, Мир!</Heading>
      <Button appearance="primary">Primary</Button>
      <Button appearance="primary" arrow="right">Primary</Button>
      <Button appearance="primary" arrow="down">Primary</Button>
      <Button>Ghost</Button>
      <Button arrow="right">Ghost</Button>
      <Button arrow="down">Ghost</Button>
      <Paragraph size="s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, tempore aperiam. Voluptatem sed, facilis, reiciendis sapiente asperiores accusantium distinctio mollitia ullam nam eius doloremque consequatur eaque accusamus cupiditate vel autem!
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, tempore aperiam. Voluptatem sed, facilis, reiciendis sapiente asperiores accusantium distinctio mollitia ullam nam eius doloremque consequatur eaque accusamus cupiditate vel autem!
      </Paragraph>
      <Paragraph size="l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, tempore aperiam. Voluptatem sed, facilis, reiciendis sapiente asperiores accusantium distinctio mollitia ullam nam eius doloremque consequatur eaque accusamus cupiditate vel autem!
      </Paragraph>
      <Tag>Тег</Tag>
      <Tag color="grey" size="l">Тег</Tag>
      <Tag color="green">Тег</Tag>
      <Tag color="red" size="l">Тег</Tag>
      <Tag color="primary">Тег</Tag>
      <Rating rating={rating} setRating={setRating} isEditable></Rating>
    </div>
  );
}
