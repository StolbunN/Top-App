import { API } from "@/app/api";
import { MenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";

export async function getMenu(firstCategory: TopLevelCategory): Promise<MenuItem[]> {
  const res = await fetch(API.topPage.find, {
    method: "POST",
    body: JSON.stringify({
      firstCategory
    }),
    headers: new Headers({"content-type": "application/json"}),
    next: {revalidate: 10}
  });
  return res.json();
}