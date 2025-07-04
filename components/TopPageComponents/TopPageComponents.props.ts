import { TopLevelCategory, TopPageModel } from "@/interfaces/page.interface";
import { ProductModel } from "@/interfaces/product.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TopPageComponentsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}