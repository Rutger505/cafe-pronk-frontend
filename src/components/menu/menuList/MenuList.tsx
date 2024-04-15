"use client";

import MenuCategory from "./MenuCategory";
import { CategoryData, DishData } from "@/app/menu/page";

import { useEffect, useState } from "react";
import { LoadingList } from "@/components/menu/menuList/loading/LoadingList";

interface MenuListProps {
  onAddToCart: (dish: DishData) => void;
}

export default function MenuList({ onAddToCart }: Readonly<MenuListProps>) {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [loading, setLoading] = useState(true);

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

    setCategories(sortedCategories);
    setLoading(false);
  }

  if (loading) {
    return <LoadingList />;
  }

  return (
    <div className={"flex max-w-5xl flex-1 flex-col"}>
      <h1 className={"mb-5 text-center text-xl"}>Menu</h1>
      <ul className={"flex flex-col gap-14"}>
        {categories.length === 0 ? (
          <p className={"text-center"}>Er zijn geen gerechten beschikbaar.</p>
        ) : (
          categories.map((category) => (
            <MenuCategory
              key={category.id}
              category={category}
              onAddToCart={onAddToCart}
            />
          ))
        )}
      </ul>
    </div>
  );
}
