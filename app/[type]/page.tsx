import { Metadata } from "next";
import { firstLevelMenu } from "@/helpers/helpers";
import { notFound } from "next/navigation";
import { Button, Card, Divider, Heading, Paragraph, Tag } from "@/components";
import resources from "@/app/resources.json";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Страница группы продуктов",
  description: "Страница группы продуктов",
};

interface TopPageTypeProps {
  params: Promise<{ type: string }>
};

export async function generateStaticParams() {
  return firstLevelMenu.map(item => ({ type: item.route }));
}

export default async function TopPageType({ params }: TopPageTypeProps) {
  const { type } = await params;
  const category = firstLevelMenu.find(menuItem => menuItem.route == type);
  const resource = resources.find(item => item.name === category?.name);
  if (!resource) {
    notFound();
  }
  console.log(resource);
  return (
    <div>
      <header className={styles.header}>
        <Heading tag="h1">{resource.name}</Heading>
        <Paragraph>{resource?.description}</Paragraph>
      </header>
      <Divider />
      <section className={styles.categories}>
        {resource.categories.map(item => (
          <Card key={item.name} className={styles.category}>
            <div className={styles["img-wrapper"]}>
              <Image src={item?.image ?? "/courses-01.png"} className={styles.img} alt={item.name} height={200} width={300} />
            </div>
            <div className={styles.tags}>
              {item.tags.map(tag => (
                <Tag key={tag} color="primary">{tag}</Tag>
              ))}
            </div>
            <div className={styles.text}>
              <Heading tag="h3" className={styles.title}>{item.name}</Heading>
              <Paragraph>{item.description}</Paragraph>
            </div>
            <Button appearance="primary" className={styles.button}>Присоединиться</Button>
          </Card>
        ))}
      </section>
    </div>
  );
}
