"use client";

import { useEffect, useState } from "react";
import Basket from "@/components/menu/basket";
import MenuList from "@/components/menu/menuList";

export interface CategoryData {
  id: number;
  name: string;
  dishes: DishData[];
}

export interface DishData {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface BasketMenuItemData {
  item: DishData;
  quantity: number;
}

export default function Menu() {
  // Get Menu JSON from API
  const [menuCategories, setMenuCategories] = useState<CategoryData[]>([]);
  const [cartItems, setCartItems] = useState<BasketMenuItemData[]>([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const apiUri = `${process.env.NEXT_PUBLIC_API_URL}/menu`;
    const response = await fetch(apiUri);
    const categories: any[] = await response.json();

    // Sort categories and dishes by position_index
    const sortedCategories = categories.toSorted(
      (a: any, b: any) => a.position_index - b.position_index,
    );
    sortedCategories.forEach((category: any) => {
      category.dishes = category.dishes.sort(
        (a: any, b: any) => a.position_index - b.position_index,
      );
    });

    setMenuCategories(categories);
  }

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
      <div className="flex flex-1 justify-center px-5 py-12 md:px-24">
        <MenuList categories={menuCategories} onAddToCart={addToCart} />
      </div>
      <Basket
        items={cartItems}
        onRemoveFromCart={removeFromCart}
        onDecrementItem={onDecrementItem}
        onIncrementItem={onIncrementItem}
        onCheckout={onCheckout}
      />
    </main>
  );
}
