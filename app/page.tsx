"use client";

import { Heading, Button, Paragraph, Tag, Rating, Input, Textarea } from "@/components";
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi reiciendis laudantium possimus, ad, laborum assumenda veniam excepturi consequuntur, quasi necessitatibus impedit laboriosam sint quisquam similique in dolore quis. Provident.
        Eos adipisci, doloremque autem, laborum distinctio odit ipsam magni natus officia officiis inventore animi vel non saepe? Eaque commodi error, earum dolore, maiores, cumque est quis accusantium debitis expedita inventore!
        Distinctio illum repellendus obcaecati consequuntur aliquam officia maxime veritatis dicta quibusdam fugiat odio reprehenderit sapiente iure doloremque molestias enim a, assumenda ex suscipit! Accusantium sunt recusandae ab, doloremque a nemo.
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
      <Input placeholder="Test" />
      <Textarea placeholder="Test Textarea"/>
    </div>
  );
}
