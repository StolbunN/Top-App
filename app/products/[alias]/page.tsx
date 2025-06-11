import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница продуктов",
  description: "Страница продуктов",
};

interface PageProductsProps {
  params: Promise<{alias: string}>
};

export default async function PageProducts({params}: PageProductsProps) {
  const {alias} = await params;
  return (
    <div>
      Страница с alias {alias}
    </div>
  );
}
