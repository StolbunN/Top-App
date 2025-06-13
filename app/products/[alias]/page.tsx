import { getMenu } from "@/api/menu";
import { getPageProducts } from "@/api/pageProducts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Страница продуктов",
  description: "Страница продуктов",
};

interface PageProductsProps {
  params: Promise<{alias: string}>
};

export async function generateStaticParams() {
  const menu = await getMenu(0);
  return menu.flatMap(item => item.pages.map(page => ({alias: page.alias})));
}

export default async function PageProducts({params}: PageProductsProps) {
  const {alias} = await params;
  const page = await getPageProducts(alias);
  if(!page) {
    notFound();
  }
  return (
    <div>
      Страница с alias {alias}
      <div>{page.title}</div>
    </div>
  );
}
