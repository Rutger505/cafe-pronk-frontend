import MenuItem from "@/components/MenuItem";
import { MenuCategoryData, MenuItemData } from "@/app/menu/page";

interface MenuCategoryProps {
  category: MenuCategoryData;
  onAddToCart: (id: MenuItemData) => void;
}

export default function MenuCategory({
  category,
  onAddToCart,
}: Readonly<MenuCategoryProps>) {
  return (
    <div className={"flex flex-col gap-5"}>
      <h2 className={"text-lg font-bold"}>{category.name}</h2>
      <ul className={"flex flex-col gap-5"}>
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </ul>
    </div>
  );
}
