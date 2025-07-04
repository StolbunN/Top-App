"use client";

import { Heading, Button, Paragraph, Tag, Rating } from "@/components";
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
        Маленький текст
      </Paragraph>
      <Paragraph>
        Средний (стандартный) текст
      </Paragraph>
      <Paragraph size="l">
        Большой текст
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
