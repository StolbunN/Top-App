import { getMenu } from "@/api/menu";
import { getTopPage } from "@/api/topPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { firstLevelMenu } from "@/helpers/helpers";
import { getProducts } from "@/api/products";
import { TopPageComponents } from "@/components";

export const metadata: Metadata = {
  title: "Страница продуктов",
  description: "Страница продуктов",
};

interface TopPageProps {
  params: Promise<{ type: string; alias: string }>
};


export async function generateStaticParams() {
  let menuItems: { type: string, alias: string }[] = [];
  for (const firstLevelItem of firstLevelMenu) {
    const menu = await getMenu(firstLevelItem.id);
    menuItems = menuItems.concat(menu.flatMap(item => item.pages.map(page => ({ type: firstLevelItem.route, alias: page.alias }))));
  }
  return menuItems;
}

export default async function TopPage({ params }: TopPageProps) {
  try {
    const { type, alias } = await params;
    const page = await getTopPage(alias);
    if (!page) {
      throw new Error("Страница продуктов на загружена");
    }
    const products = await getProducts(page?.category, 10);
    const topCategory = page?.firstCategory;
    const route = firstLevelMenu.find(menuItem => menuItem.id == topCategory)?.route;

    let paths: string[] = [];
    if (!Number.isFinite(topCategory) || topCategory == undefined) {
      notFound();
    }
    const menu = await getMenu(topCategory);
    paths = menu.flatMap(item => item.pages.map(page => `/${route}/${page.alias}`));

    if (!paths.find(path => path == `/${type}/${alias}`)) {
      notFound();
    }

    return (
      <TopPageComponents 
        firstCategory={topCategory}
        page={page}
        products={products}
      />
    );
  } catch {
    notFound();
  }
}
