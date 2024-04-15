import { LoadingMenuItem } from "@/components/menu/menuList/loading/LoadingMenuItem";
import { LoadingMenuItemData } from "@/components/menu/menuList/loading/LoadingMenuList";

interface LoadingMenuCategoryProps {
  title: string;
  items: LoadingMenuItemData[];
}

export function LoadingMenuCategory({
  title,
  items,
}: Readonly<LoadingMenuCategoryProps>) {
  return (
    <div className={"flex flex-col gap-5"}>
      <h2
        className={
          "select-none self-start rounded-normal bg-secondary text-lg font-bold text-secondary"
        }
      >
        {title}
      </h2>
      <ul className={"flex flex-col gap-5"}>
        {items.map((item, index) => (
          <LoadingMenuItem
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
}
