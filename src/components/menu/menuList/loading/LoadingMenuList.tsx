import { LoadingMenuCategory } from "@/components/menu/menuList/loading/LoadingMenuCategory";

export interface LoadingMenuItemData {
  title: string;
  description: string;
  price: string;
}

function getCharacters(length: number) {
  return "A".repeat(length);
}

export function LoadingMenuList() {
  // Define how long the loading placeholders should be
  const categories = [
    {
      title: 7,
      items: [
        {
          title: 15,
          description: 45,
          price: 5,
        },
        {
          title: 20,
          description: 60,
          price: 4,
        },
      ],
    },
    {
      title: 10,
      items: [
        {
          title: 12,
          description: 37,
          price: 5,
        },
        {
          title: 18,
          description: 52,
          price: 5,
        },
      ],
    },
  ];

  return (
    <div className={"flex max-w-5xl flex-1 flex-col"}>
      <h1 className={"mb-5 text-center text-xl"}>Menu</h1>
      <ul className={"flex flex-col gap-14"}>
        {categories.map((category, index) => (
          <LoadingMenuCategory
            key={index}
            title={getCharacters(category.title)}
            items={category.items.map((item) => ({
              title: getCharacters(item.title),
              description: getCharacters(item.description),
              price: getCharacters(item.price),
            }))}
          />
        ))}
      </ul>
    </div>
  );
}
