import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import CoursesIcon from "@/public/courses.svg";
import ServicesIcon from "@/public/services.svg";
import BooksIcon from "@/public/books.svg";
import ProductsIcon from "@/public/products.svg";
import { TopLevelCategory } from "@/interfaces/page.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: "courses", name: "Курсы", icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
  { route: "services", name: "Сервисы", icon: <ServicesIcon/>, id: TopLevelCategory.Services},
  { route: "books", name: "Книги", icon: <BooksIcon/>, id: TopLevelCategory.Books},
  { route: "products", name: "Товары", icon: <ProductsIcon/>, id: TopLevelCategory.Products}
];

const options: Intl.NumberFormatOptions  = {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0
};

export const priceRub = (price: number): string => {
  return new Intl.NumberFormat("ru-RU", options).format(price);
};