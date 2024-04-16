import { BasketMenuItemData } from "@/app/menu/page";
import TransferMethodSwitch from "./TransferMethodSwitch";
import BasketItem from "./BasketItem";
import Button from "@/components/Button";

interface BasketProps {
  height: number | undefined;
  items: BasketMenuItemData[];
  onRemoveFromCart: (item: BasketMenuItemData) => void;
  onDecrementItem: (item: BasketMenuItemData) => void;
  onIncrementItem: (item: BasketMenuItemData) => void;
  onCheckout: () => void;
}

export default function Basket({
  height,
  items,
  onRemoveFromCart,
  onDecrementItem,
  onIncrementItem,
  onCheckout,
}: Readonly<BasketProps>) {
  return (
    <div
      className={
        "sticky top-0 flex h-screen w-80 flex-col items-center gap-5 p-5 shadow-left"
      }
      style={{ height }}
    >
      <h2 className={"my-5 text-center text-lg font-bold"}>Basket</h2>

      <TransferMethodSwitch />

      {items.length > 0 ? (
        <>
          <ul className={"flex w-full flex-1 flex-col"}>
            {items.map((basketItem) => (
              <BasketItem
                key={basketItem.item.id}
                basketItem={basketItem}
                onRemoveFromCart={onRemoveFromCart}
                onDecrementItem={onDecrementItem}
                onIncrementItem={onIncrementItem}
              />
            ))}
          </ul>
          <Button onClick={onCheckout} className={"w-full font-bold"}>
            Checkout (€
            {items
              .reduce((acc, item) => acc + item.item.price * item.quantity, 0)
              .toFixed(2)}
            )
          </Button>
        </>
      ) : (
        <div className={"flex h-full flex-col items-center justify-center"}>
          <h3 className={"text-lg font-bold"}>Fill your basket</h3>
          <p className={"text-sm"}>Your basket is empty</p>
        </div>
      )}
    </div>
  );
}
