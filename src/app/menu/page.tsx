"use client";

import { useRef, useState } from "react";
import Basket from "@/components/menu/basket";
import MenuList from "@/components/menu/menuList";
import useHeightOnScreen from "@/hooks/useHeightOnScreen";
import { BasketMenuItemData, DishData } from "@/MenuData";
import LoginContainer from "@/components/auth/LoginContainer";
import useUser from "@/hooks/useUser";
import axios from "axios";

export default function Menu() {
  const [cartItems, setCartItems] = useState<BasketMenuItemData[]>([]);
  const [loginVisible, setLoginVisible] = useState(false);
  const [user, refreshUser] = useUser();
  const [deliveryTime, setDeliveryTime] = useState<number>(40);
  const [basketText, setBasketText] = useState("");

  const listRef = useRef<HTMLDivElement>(null);
  const visibleListHeight = useHeightOnScreen(listRef);

  function onLoginSuccess() {
    setLoginVisible(false);
    refreshUser();
  }

  function onLoginClose() {
    setLoginVisible(false);
  }

  function onDeliveryTimeChange(newDeliveryTime: number) {
    setDeliveryTime(newDeliveryTime);
  }

  function addToCart(item: DishData) {
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
    changeBasketItemQuantity(item, -1);
    return 1;
  }

  function onIncrementItem(item: BasketMenuItemData) {
    changeBasketItemQuantity(item, 1);
  }

  async function onCheckout() {
    if (!user?.logged_in) {
      setLoginVisible(true);
      return;
    }

    const deliveryDate = new Date();
    deliveryDate.setMinutes(deliveryDate.getMinutes() + deliveryTime);

    const year = deliveryDate.getFullYear();
    const month = String(deliveryDate.getMonth() + 1).padStart(2, "0");
    const day = String(deliveryDate.getDate()).padStart(2, "0");
    const hours = String(deliveryDate.getHours()).padStart(2, "0");
    const minutes = String(deliveryDate.getMinutes()).padStart(2, "0");
    const seconds = String(deliveryDate.getSeconds()).padStart(2, "0");

    const deliveryDateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/orders`;
    try {
      const response = await axios.post(
        apiUrl,
        {
          dishes: cartItems.map((item) => ({
            id: item.item.id,
            quantity: item.quantity,
          })),
          delivery_date: deliveryDateString,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      setBasketText("");
      setCartItems([]);
      alert("Bestelling geplaatst!");
    } catch (error) {
      console.error("Failed to create order:", error);
      setBasketText("Er is iets misgegaan bij het plaatsen van de bestelling.");
    }
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
        basketText={basketText}
        onDeliveryTimeChange={onDeliveryTimeChange}
        onRemoveFromCart={removeFromCart}
        onDecrementItem={onDecrementItem}
        onIncrementItem={onIncrementItem}
        onCheckout={onCheckout}
        height={visibleListHeight}
      />
      {loginVisible && (
        <LoginContainer
          onLoginSuccess={onLoginSuccess}
          onLoginClose={onLoginClose}
        />
      )}
    </main>
  );
}
