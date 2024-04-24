import MenuDish from "./MenuDish";
import { CategoryData, DishData } from "@/MenuData";

interface MenuCategoryProps {
  category: CategoryData;
  onAddToCart: (dish: DishData) => void;
}

export default function MenuCategory({
  category,
  onAddToCart,
}: Readonly<MenuCategoryProps>) {
  const { name, dishes } = category;

  return (
    <div>
      <h2 className={"mb-5 text-lg font-bold"}>{name}</h2>
      <ul className={"flex flex-col gap-5"}>
        {dishes.map((dish) => (
          <MenuDish key={dish.id} dish={dish} onAddToCart={onAddToCart} />
        ))}
      </ul>
    </div>
  );
}
