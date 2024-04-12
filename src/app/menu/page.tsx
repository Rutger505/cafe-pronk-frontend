"use client";

import MenuCategory from "@/components/MenuCatagory";
import Basket from "@/components/Basket";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export interface MenuCategoryData {
  id: number;
  name: string;
  items: MenuItemData[];
}

export interface MenuItemData {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface BasketMenuItemData {
  item: MenuItemData;
  quantity: number;
}

export default function Menu() {
  // Get Menu JSON from API
  const menu: MenuCategoryData[] = [
    {
      id: 1,
      name: "Starters",
      items: [
        {
          id: 1,
          name: "Nachos",
          description: "Tortilla chips with cheese, jalapenos, and salsa",
          price: 6.52,
        },
        {
          id: 2,
          name: "Garlic Bread",
          description: "Toasted ciabatta with garlic butter",
          price: 4,
        },
      ],
    },
    {
      id: 2,
      name: "Mains",
      items: [
        {
          id: 1,
          name: "Pizza",
          description: "Tomato and cheese on a thin base",
          price: 9.99,
        },
        {
          id: 2,
          name: "Burger",
          description: "Beef patty with lettuce, tomato, and cheese",
          price: 12.5,
        },
      ],
    },
    {
      id: 3,
      name: "Desserts",
      items: [
        {
          id: 1,
          name: "Ice Cream",
          description: "Vanilla ice cream with chocolate sauce",
          price: 5.5,
        },
        {
          id: 2,
          name: "Cheesecake",
          description: "New York style cheesecake with raspberry coulis",
          price: 7.5,
        },
      ],
    },
  ];

  const [cartItems, setCartItems] = useState<BasketMenuItemData[]>([]);

  function addToCart(item: MenuItemData) {
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
  }

  function onIncrementItem(item: BasketMenuItemData) {
    console.log("Incremented item:", JSON.stringify(item));
    changeBasketItemQuantity(item, 1);
  }

  return (
    <div className={"flex"}>
      <div className={"flex flex-1 flex-col"}>
        <div className={"min-h-screen"}>
          <Header />
          <main className="flex max-w-5xl flex-col px-5 py-12 md:px-24">
            <h1 className={"mb-5 text-center text-xl"}>Menu</h1>
            <ul className={"flex flex-col gap-14"}>
              {menu.map((category) => (
                <MenuCategory
                  key={category.id}
                  category={category}
                  onAddToCart={addToCart}
                />
              ))}
            </ul>
          </main>
        </div>
        <Footer />
      </div>
      <Basket
        items={cartItems}
        onRemoveFromCart={removeFromCart}
        onDecrementItem={onDecrementItem}
        onIncrementItem={onIncrementItem}
      />
    </div>
  );
}
