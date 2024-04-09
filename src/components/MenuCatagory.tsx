import MenuItem from "@/components/MenuItem";
import { MenuItemData } from "@/app/menu/page";

interface MenuCategoryProps {
  id: string;
  name: string;
  items: MenuItemData[];
  onAddToCart: (id: MenuItemData) => void;
}

export default function MenuCategory({
  id,
  name,
  items,
  onAddToCart,
}: Readonly<MenuCategoryProps>) {
  return (
    <div className={"flex flex-col gap-5"}>
      <h2 className={"text-lg font-bold"}>{name}</h2>
      <ul className={"flex flex-col gap-5"}>
        {items.map((item) => (
          <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </ul>
    </div>
  );
}
