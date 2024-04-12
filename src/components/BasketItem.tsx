import { BasketMenuItemData } from "@/app/menu/page";

interface BasketMenuItemProps {
  basketItem: BasketMenuItemData;
  onRemoveFromCart: (item: BasketMenuItemData) => void;
  onDecrementItem: (item: BasketMenuItemData) => void;
  onIncrementItem: (item: BasketMenuItemData) => void;
}

export default function BasketItem({
  basketItem,
  onRemoveFromCart,
  onDecrementItem,
  onIncrementItem,
}: Readonly<BasketMenuItemProps>) {
  return (
    <div className={"flex w-full flex-col gap-2 p-3"}>
      <div className={"flex justify-between"}>
        <h3 className={"font-bold"}>{basketItem.item.name}</h3>
        <p className={"font-bold"}>{basketItem.item.price.toFixed(2)}</p>
      </div>
      <div className={"flex items-center justify-between"}>
        <div className={"grid h-5 w-20 grid-cols-3 items-center"}>
          <button
            onClick={() => onDecrementItem(basketItem)}
            className={
              "flex items-center justify-center rounded-button bg-secondary"
            }
            disabled={basketItem.quantity <= 1}
          >
            -
          </button>
          <p className={"text-center"}>{basketItem.quantity}</p>
          <button
            onClick={() => onIncrementItem(basketItem)}
            className={
              "flex items-center justify-center rounded-button bg-secondary"
            }
          >
            +
          </button>
        </div>

        <button
          onClick={() => onRemoveFromCart(basketItem)}
          className={"bg-red-500 text-white rounded px-2 py-1"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
