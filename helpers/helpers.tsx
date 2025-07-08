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


export const declensionOfNum = (count: number, declension: [string, string, string]): string => {
  if(count > 4 && count < 21) {
    return declension[0];
  }
  else if(count % 10 == 1) {
    return declension[1];
  }
  else if (count % 10 == 2 || count % 10 == 3 || count % 10 == 4) {
    return declension[2];
  }
  return declension[0];
};

//* функция для получения правильных путей некоторых картинок, так как в API с ними возникли проблемы 

export const errorPathToImg = (path: string): string => {
  if(path.includes("cdn-bucket.hb.bizmrg.com")) {
    return path.slice(path.indexOf("http://cdn-bucket.hb.bizmrg.com"));
  }
  return path;
};