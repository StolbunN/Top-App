import { TopLevelCategory } from "@/interfaces/page.interface";
import { Menu } from "../Menu/Menu";
import { getMenu } from "@/api/menu";
import { MenuItem } from "@/interfaces/menu.interface";

export async function MenuLoader() {

  const menuDataResults = await Promise.allSettled([
    getMenu(TopLevelCategory.Courses), 
    getMenu(TopLevelCategory.Services),
    getMenu(TopLevelCategory.Books),
    getMenu(TopLevelCategory.Products)
  ]);

  const menuData: MenuItem[][] = menuDataResults.map(dataItem => {
    if(dataItem.status === "fulfilled") {
      return dataItem.value;
    }
    return [];
  });

  return (
    <>
      <Menu menuData={menuData}/>
    </>
  );
}