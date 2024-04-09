"use client";

import MenuCategory from "@/components/MenuCatagory";
import { v4 as uuidv4 } from "uuid";

export interface MenuCategoryData {
  id: string;
  name: string;
  items: MenuItemData[];
}

export interface MenuItemData {
  id: string;
  name: string;
  description: string;
  price: number;
}

export default function Menu() {
  // Get Menu JSON from API
  const menu: MenuCategoryData[] = [
    {
      id: uuidv4(),
      name: "Starters",
      items: [
        {
          id: uuidv4(),
          name: "Nachos",
          description: "Tortilla chips with cheese, jalapenos, and salsa",
          price: 6.5,
        },
        {
          id: uuidv4(),
          name: "Garlic Bread",
          description: "Toasted ciabatta with garlic butter",
          price: 4.5,
        },
      ],
    },
    {
      id: uuidv4(),
      name: "Mains",
      items: [
        {
          id: uuidv4(),
          name: "Pizza",
          description: "Tomato and cheese on a thin base",
          price: 10.5,
        },
        {
          id: uuidv4(),
          name: "Burger",
          description: "Beef patty with lettuce, tomato, and cheese",
          price: 12.5,
        },
      ],
    },
    {
      id: uuidv4(),
      name: "Desserts",
      items: [
        {
          id: uuidv4(),
          name: "Ice Cream",
          description: "Vanilla ice cream with chocolate sauce",
          price: 5.5,
        },
        {
          id: uuidv4(),
          name: "Cheesecake",
          description: "New York style cheesecake with raspberry coulis",
          price: 7.5,
        },
      ],
    },
  ];

  function addToCart(item: MenuItemData) {
    console.log("Added to cart:", JSON.stringify(item));
  }

  return (
    <main className="row-auto flex-col items-center justify-between p-24">
      <h1 className={"mb-20 text-center text-xl"}>Menu</h1>
      <div className={"flex max-w-4xl flex-col justify-center"}>
        {menu.map((category) => (
          <MenuCategory
            key={category.id}
            id={category.id}
            name={category.name}
            items={category.items}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </main>
  );
}
