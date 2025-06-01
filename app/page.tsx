import { Headling, Button, Paragraph, Tag } from "@/components";


export default function Home() {
  return (
    <div>
      <Headling tag="h1">Привет, Мир!</Headling>
      <Headling tag="h2">Привет, Мир!</Headling>
      <Headling tag="h3">Привет, Мир!</Headling>
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
    </div>
  );
}
