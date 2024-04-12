import { BasketMenuItemData } from "@/app/menu/page";
import TransferMethodSwitch from "@/components/TransferMethodSwitch";
import BasketItem from "@/components/BasketItem";
import BasketCheckoutButton from "@/components/BasketCheckoutButton";

interface BasketProps {
  items: BasketMenuItemData[];
  onRemoveFromCart: (item: BasketMenuItemData) => void;
  onDecrementItem: (item: BasketMenuItemData) => void;
  onIncrementItem: (item: BasketMenuItemData) => void;
  onCheckout: () => void;
}

export default function Basket({
  items,
  onRemoveFromCart,
  onDecrementItem,
  onIncrementItem,
  onCheckout,
}: Readonly<BasketProps>) {
  return (
    <div
      className={
        "sticky top-0 flex h-screen w-80 flex-col items-center gap-5 p-5"
      }
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
          <BasketCheckoutButton
            price={items.reduce(
              (acc, item) => acc + item.item.price * item.quantity,
              0,
            )}
            onCheckout={onCheckout}
          />
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