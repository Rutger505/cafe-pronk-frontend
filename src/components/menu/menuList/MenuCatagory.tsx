import MenuItem from "./MenuItem";
import { CategoryData, DishData } from "@/app/menu/page";

interface MenuCategoryProps {
  category: CategoryData;
  onAddToCart: (dish: DishData) => void;
}

export default function MenuCategory({
  category,
  onAddToCart,
}: Readonly<MenuCategoryProps>) {
  return (
    <div className={"flex flex-col gap-5"}>
      <h2 className={"text-lg font-bold"}>{category.name}</h2>
      <ul className={"flex flex-col gap-5"}>
        {category.dishes.map((dish) => (
          <MenuItem key={dish.id} dish={dish} onAddToCart={onAddToCart} />
        ))}
      </ul>
    </div>
  );
}
