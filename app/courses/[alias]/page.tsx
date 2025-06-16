import { getMenu } from "@/api/menu";
import { getCoursesProducts } from "@/api/pageCourses";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Страница продуктов",
  description: "Страница продуктов",
};

interface PageCoursesProps {
  params: Promise<{ alias: string }>
};

export async function generateStaticParams() {
  const menu = await getMenu(0);
  return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
}

export default async function PageProducts({ params }: PageCoursesProps) {
  const { alias } = await params;
  const page = await getCoursesProducts(alias);
  if (!page) {
    notFound();
  }
  return (
    <div>
      Страница с alias {alias}
      <div>{page.title}</div>
    </div>
  );
}
