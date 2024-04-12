import { DishData } from "@/app/menu/page";

interface MenuItemProps {
  item: DishData;
  onAddToCart: (id: DishData) => void;
}

export default function MenuItem({
  item,
  onAddToCart,
}: Readonly<MenuItemProps>) {
  console.log("MenuItem", item);

  return (
    <div
      className={
        "flex justify-between rounded-normal p-5 outline outline-2 outline-secondary"
      }
    >
      <div className={"flex flex-col gap-1"}>
        <h3 className={"text-md font-bold"}>{item.name}</h3>
        <p className={"text-sm text-tertiary"}>{item.description}</p>
        <p className={"text-md font-bold"}>€{item.price.toFixed(2)}</p>
      </div>
      <button onClick={() => onAddToCart(item)}>Add to Cart</button>
    </div>
  );
}
