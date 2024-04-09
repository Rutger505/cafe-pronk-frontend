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
    <div>
      <h2 className={"mt-10 text-lg font-bold"}>{name}</h2>
      <ul className={"flex flex-col gap-y-3"}>
        {items.map((item) => (
          <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </ul>
    </div>
  );
}
