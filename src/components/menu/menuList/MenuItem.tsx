import { DishData } from "@/app/menu/page";

interface MenuItemProps {
  dish: DishData;
  onAddToCart: (dish: DishData) => void;
}

export default function MenuItem({
  dish,
  onAddToCart,
}: Readonly<MenuItemProps>) {
  return (
    <div
      className={
        "flex justify-between rounded-normal p-5 outline outline-2 outline-secondary"
      }
    >
      <div className={"flex flex-col gap-1"}>
        <h3 className={"text-md font-bold"}>{dish.name}</h3>
        <p className={"text-sm text-tertiary"}>{dish.description}</p>
        <p className={"text-md font-bold"}>€{dish.price.toFixed(2)}</p>
      </div>
      <button onClick={() => onAddToCart(dish)}>Add to Cart</button>
    </div>
  );
}
