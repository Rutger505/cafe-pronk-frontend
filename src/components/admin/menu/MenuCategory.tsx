"use client";

import { CategoryData } from "@/MenuData";
import MenuDish from "@/components/admin/menu/MenuDish";

interface MenuCategoryProps {
  category: CategoryData;
}

export default function MenuCategory({
  category,
}: Readonly<MenuCategoryProps>) {
  const { name, dishes } = category;

  return (
    <div>
      <div className={"my-5 grid grid-cols-[1fr_auto_auto_auto]"}>
        <h2 className={"text-lg font-bold"}>{name}</h2>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
          </svg>
        </button>
        <button className={"ml-2"}>
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
      <ul className={"flex flex-col gap-5"}>
        {dishes.map((dish) => (
          <MenuDish key={dish.id} dish={dish} />
        ))}
      </ul>
    </div>
  );
}
