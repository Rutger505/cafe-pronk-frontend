import { MenuItemData } from "@/app/menu/page";
import TransferMethodSwitch from "@/components/TransferMethodSwitch";

interface BasketProps {
  items: MenuItemData[];
}

export default function Basket({ items }: Readonly<BasketProps>) {
  return (
    <div
      className={"sticky top-0 flex h-screen w-80 flex-col items-center p-5"}
    >
      <h2 className={"mb-5 text-center text-lg font-bold"}>Basket</h2>

      <TransferMethodSwitch />

      <ul className={"flex flex-1 flex-col gap-2 "}>
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.id} className={"flex justify-between"}>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </li>
          ))
        ) : (
          <div className={"flex h-full flex-col items-center justify-center"}>
            <h3 className={"text-lg font-bold"}>Fill your basket</h3>
            <p className={"text-sm"}>Your basket is empty</p>
          </div>
        )}
      </ul>
    </div>
  );
}
