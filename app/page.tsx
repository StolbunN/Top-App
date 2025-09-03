import { Button, Card, Heading, Paragraph, Tag } from "@/components";
import styles from "./page.module.css";
import AbstractLineIcon from "@/public/abstract-line.svg";
import LightningIcon from "@/public/lightning.svg";
import resources from "./resources.json";
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <Heading tag="h1" className={styles.title}>
          <AbstractLineIcon className={styles["abs-line"]} />
          <LightningIcon className={styles.lightning} />
            <span className={styles["title-text"]}><span className={styles.primary}>Раскройте</span>&nbsp;<span>свой Творческий потенциал</span></span>
        </Heading>
        <Heading tag="h2" className={styles.subtitle}>
          с онлайн-курсами по дизайну и разработке.
        </Heading>
        <Paragraph>Учитесь у отраслевых экспертов и повышайте свои навыки.</Paragraph>
      </header>
      <section className={styles.content}>
        <div className={styles.heading}>
          <Heading tag="h2">
            Что у нас есть
          </Heading>
          <Paragraph>
            Хотите учиться, читать или покупать с умом? Мы собрали для вас топовые курсы, полезные книги, проверенные товары и сервисы. Выбирайте лучшее на основе реальных оценок и отзывов!
          </Paragraph>
        </div>
        <div className={styles.resources}>

          {resources.map(resource => {
            return (
              <Card key={resource.name} className={styles.resource}>
                <Heading tag="h3">
                  {resource.name}
                </Heading>
                <Heading tag="h4">
                  {resource.title}
                </Heading>
                <div className={styles.images}>
                  {resource.images.map(img => {
                    return (
                      <div className={styles["image-wrapper"]} key={img}>
                        <Image src={img} alt={img} width={300} height={300} className={styles.img}/>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.tags}>
                  {resource.tags.map(tag => {
                    return (
                      <Tag key={tag} color="primary" className={styles.tag}>{tag}</Tag>
                    );
                  })}
                </div>
                <Paragraph className={styles.description}>
                  {resource.description}
                </Paragraph>
                <Link href={resource.path} tabIndex={-1}>
                  <Button arrow="right" appearance="primary" tabIndex={0}>Узнать больше</Button>
                </Link>
              </Card>
            );
          })}
        </div>
      </section>
      {/* <Heading tag="h2">Привет, Мир!</Heading>
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
      <Input placeholder="Test" />
      <Textarea placeholder="Test Textarea"/> */}
    </div>
  );
}
