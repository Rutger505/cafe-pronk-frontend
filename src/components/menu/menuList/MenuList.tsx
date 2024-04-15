import MenuCategory from "./MenuCatagory";
import { CategoryData, DishData } from "@/app/menu/page";

interface MenuListProps {
  categories: CategoryData[];
  onAddToCart: (dish: DishData) => void;
}

export default function MenuList({
  categories,
  onAddToCart,
}: Readonly<MenuListProps>) {
  return (
    <div className={"flex max-w-5xl flex-1 flex-col justify-between "}>
      <h1 className={"mb-5 text-center text-xl"}>Menu</h1>
      <ul className={"flex flex-col gap-14"}>
        {categories.map((category) => (
          <MenuCategory
            key={category.id}
            category={category}
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
    </div>
  );
}
