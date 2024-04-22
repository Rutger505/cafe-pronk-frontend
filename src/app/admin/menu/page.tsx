"use client";

import MenuCategory from "@/components/admin/menu/MenuCategory";
import Link from "next/link";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { CategoryData } from "@/MenuData";

export default function ManageMenu() {
  const [categories, setCategories] = useState<CategoryData[]>([]);

  useEffect(() => {
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
    }
    fetchMenu();
  }, []);

  return (
    <main>
      <h1 className={"mb-10 text-center text-xl"}>Manage Menu</h1>

      <div className={"flex gap-5 "}>
        <Button>
          <Link href={"/admin/menu/create-category"}>Nieuwe Categorie</Link>
        </Button>

        <Button>
          <Link href={"/admin/menu/create-dish"}>Nieuw Gerecht</Link>
        </Button>
      </div>

      {categories.map((category) => (
        <MenuCategory key={category.id} category={category} />
      ))}
    </main>
  );
}
