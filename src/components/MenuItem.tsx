import { MenuItemData } from "@/app/menu/page";

interface MenuItemProps {
  item: MenuItemData;
  onAddToCart: (id: MenuItemData) => void;
}

export default function MenuItem({
  item,
  onAddToCart,
}: Readonly<MenuItemProps>) {
  return (
    <div
      className={
        "rounded-normal flex justify-between p-5 outline outline-2 outline-secondary"
      }
    >
      <div className={"flex flex-col gap-1"}>
        <h3 className={"text-md font-bold"}>{item.name}</h3>
        <p className={"text-sm text-tertiary"}>{item.description}</p>
        <p className={"text-md font-bold"}>€{item.price}</p>
      </div>
      <button onClick={() => onAddToCart(item)}>Add to Cart</button>
    </div>
  );
}
