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
        "flex justify-between rounded-xl p-5 outline outline-2 outline-secondary"
      }
    >
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>€{item.price}</p>
      </div>
      <button onClick={() => onAddToCart(item)}>Add to Cart</button>
    </div>
  );
}
