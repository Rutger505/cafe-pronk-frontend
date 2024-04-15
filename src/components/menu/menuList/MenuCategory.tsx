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
  const { id, name, dishes } = category;

  return (
    <div className={"flex flex-col gap-5"}>
      <h2 className={"text-lg font-bold"}>{name}</h2>
      <ul className={"flex flex-col gap-5"}>
        {dishes.map((dish) => (
          <MenuItem key={id} dish={dish} onAddToCart={onAddToCart} />
        ))}
      </ul>
    </div>
  );
}
