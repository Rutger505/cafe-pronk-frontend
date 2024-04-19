"use client";

import { useRef } from "react";
import Basket from "@/components/menu/basket";
import MenuList from "@/components/menu/menuList";
import useHeightOnScreen from "@/hooks/useHeightOnScreen";
import { BasketMenuItemData, DishData } from "@/MenuData";
import { usePersistedState } from "@/hooks/usePersistedState";

export default function Menu() {
  const [cartItems, setCartItems] = usePersistedState<BasketMenuItemData[]>(
    "cartItems",
    [],
  );
  const listRef = useRef<HTMLDivElement>(null);
  const visibleListHeight = useHeightOnScreen(listRef);

  function addToCart(item: DishData) {
    console.log("Added to cart:", JSON.stringify(item));

    // Check if item is already in cart
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.item.id === item.id,
    );
    if (existingCartItem) {
      changeBasketItemQuantity(existingCartItem, 1);
      return;
    }

    setCartItems([...cartItems, { item, quantity: 1 }]);
  }

  function removeFromCart(item: BasketMenuItemData) {
    console.log("Removed from cart:", JSON.stringify(item));
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
  }

  function changeBasketItemQuantity(
    item: BasketMenuItemData,
    quantityChange: number,
  ) {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.item === item.item) {
          return { ...cartItem, quantity: cartItem.quantity + quantityChange };
        }
        return cartItem;
      }),
    );
  }

  function onDecrementItem(item: BasketMenuItemData) {
    console.log("Decremented item:", JSON.stringify(item));
    changeBasketItemQuantity(item, -1);
    return 1;
  }

  function onIncrementItem(item: BasketMenuItemData) {
    console.log("Incremented item:", JSON.stringify(item));
    changeBasketItemQuantity(item, 1);
  }

  function onCheckout() {
    setCartItems([]);
    alert("Checkout complete");
  }

  return (
    <main className={"flex"}>
      <div
        ref={listRef}
        className="flex flex-1 justify-center px-5 py-14 md:px-24"
      >
        <div className={"flex max-w-5xl flex-1 flex-col"}>
          <h1 className={"mb-12 text-center text-xl"}>Menu</h1>
          <MenuList onAddToCart={addToCart} />
        </div>
      </div>
      <Basket
        items={cartItems}
        onRemoveFromCart={removeFromCart}
        onDecrementItem={onDecrementItem}
        onIncrementItem={onIncrementItem}
        onCheckout={onCheckout}
        height={visibleListHeight}
      />
    </main>
  );
}
