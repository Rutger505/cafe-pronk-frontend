import { LoadingMenuItemData } from "@/components/menu/menuList/loading/LoadingMenuList";

interface LoadingMenuItemProps extends LoadingMenuItemData {}

export function LoadingMenuItem({
  title,
  description,
  price,
}: Readonly<LoadingMenuItemProps>) {
  return (
    <div
      className={
        "flex justify-between rounded-normal p-5 outline outline-2 outline-secondary"
      }
    >
      <div className={"flex flex-col gap-1"}>
        <h3
          className={
            "select-none self-start rounded-normal bg-secondary text-md font-bold text-secondary"
          }
        >
          {title}
        </h3>
        <p
          className={
            "select-none self-start rounded-normal bg-secondary text-sm text-secondary"
          }
        >
          {description}
        </p>
        <p
          className={
            "select-none self-start rounded-normal bg-secondary text-md font-bold text-secondary"
          }
        >
          {price}
        </p>
      </div>
    </div>
  );
}
