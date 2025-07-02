import { Metadata } from "next";
import { firstLevelMenu } from "@/helpers/helpers";
import { notFound } from "next/navigation";

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
  if (!firstLevelMenu.find(menuItem => menuItem.route == type)) {
    notFound();
  }
  return (
    <div>
      Страница пока что курсов {type}
    </div>
  );
}
