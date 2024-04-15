import { LoadingDish } from "@/components/menu/menuList/loading/LoadingDish";
import { LoadingMenuItemData } from "@/components/menu/menuList/loading/LoadingList";

interface LoadingMenuCategoryProps {
  title: string;
  items: LoadingMenuItemData[];
}

export function LoadingCategory({
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
          <LoadingDish
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
