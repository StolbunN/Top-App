import { getMenu } from "@/api/menu";
import { getProducts } from "@/api/pageProducts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { firstLevelMenu } from "@/helpers/helpers";

export const metadata: Metadata = {
  title: "Страница продуктов",
  description: "Страница продуктов",
};

interface PageProductsProps {
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

export default async function PageProducts({ params }: PageProductsProps) {
  try {
    const { type, alias } = await params;
    const page = await getProducts(alias);
    const category = page?.firstCategory;
    const route = firstLevelMenu.find(menuItem => menuItem.id == category)?.route;

    let paths: string[] = [];
    if (!Number.isFinite(category) || category == undefined) {
      notFound();
    }
    const menu = await getMenu(category);
    paths = menu.flatMap(item => item.pages.map(page => `/${route}/${page.alias}`));

    if (!paths.find(path => path == `/${type}/${alias}`)) {
      notFound();
    }
    
    return (
      <div>
        Страница с alias {alias}
        <div>{page?.title}</div>
      </div>
    );
  } catch {
    notFound();
  }
}
