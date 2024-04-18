import { DishData } from "@/MenuData";

interface MenuItemProps {
  dish: DishData;
}

export default function MenuDish({ dish }: Readonly<MenuItemProps>) {
  const { name, description, price } = dish;

  return (
    <div
      className={
        "flex justify-between rounded-normal p-5 outline outline-2 outline-secondary"
      }
    >
      <div className={"flex flex-col gap-1"}>
        <h3 className={"text-md font-bold"}>{name}</h3>
        <p className={"text-sm text-tertiary"}>{description}</p>
        <p className={"text-md font-bold"}>€{price.toFixed(2)}</p>
      </div>

      <div className={"flex flex-col items-end justify-between"}>
        <div className={"flex "}>
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
        </div>
        <button>
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
