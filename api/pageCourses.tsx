import { API } from "@/app/api";
import { TopPageModel } from "@/interfaces/page.interface";

export async function getCoursesProducts(alias: string): Promise<TopPageModel | null> {
  const res = await fetch(`${API.topPage.byAlias}/${alias}`, {
    next: { revalidate: 10 }
  });
  console.log("Ревалидация getCoursesProducts");
  if (!res.ok) {
    return null;
  }
  return res.json();
}