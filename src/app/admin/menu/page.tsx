import MenuCategory from "@/components/admin/menu/MenuCategory";
import Link from "next/link";
import Button from "@/components/Button";

export default function ManageMenu() {
  const categories = [
    {
      id: 1,
      name: "Starters",
      position_index: 1,
      dishes: [
        {
          id: 1,
          category_id: 1,
          name: "Bitterballen",
          description:
            "Een heerlijke Nederlandse snack. Wordt geserveerd met mosterd.",
          price: 5.5,
          position_index: 1,
        },
        {
          id: 2,
          category_id: 1,
          name: "Brood plank",
          description:
            "Een assortiment van vers brood geserveerd met verschillende dips en spreads, perfect als voorgerecht.",
          price: 6.5,
          position_index: 2,
        },
      ],
    },
    {
      id: 2,
      name: "Main Courses",
      position_index: 2,
      dishes: [
        {
          id: 3,
          category_id: 2,
          name: "Pizza margherita",
          description:
            "Een klassieke Italiaanse pizza met tomatensaus, mozzarella en verse basilicum.",
          price: 8.5,
          position_index: 3,
        },
        {
          id: 4,
          category_id: 2,
          name: "Steak",
          description:
            "Een sappige biefstuk gegrild tot in de perfectie, geserveerd met aardappelen en groenten.",
          price: 12.5,
          position_index: 4,
        },
        {
          id: 5,
          category_id: 2,
          name: "Spareribs",
          description:
            "Gemarineerde varkensribbetjes gegrild tot ze lekker mals zijn, met een smaakvolle barbecuesaus.",
          price: 12.5,
          position_index: 5,
        },
      ],
    },
    {
      id: 3,
      name: "Desserts",
      position_index: 3,
      dishes: [
        {
          id: 6,
          category_id: 3,
          name: "Appeltaart",
          description:
            "Een traditioneel Nederlands dessert gemaakt van verse appels, kaneel en een knapperige korst. Heerlijk met een bolletje vanille-ijs.",
          price: 4.5,
          position_index: 6,
        },
        {
          id: 7,
          category_id: 3,
          name: "Tiramisu",
          description:
            "Een klassiek Italiaans dessert met lagen mascarponecrème, espresso gedrenkte lange vingers en cacaopoeder.",
          price: 5.5,
          position_index: 7,
        },
        {
          id: 8,
          category_id: 3,
          name: "Dame blanche",
          description:
            "Een eenvoudig maar heerlijk dessert bestaande uit vanille-ijs overgoten met warme chocoladesaus en gegarneerd met slagroom.",
          price: 6.5,
          position_index: 8,
        },
      ],
    },
    {
      id: 4,
      name: "Drinks",
      position_index: 4,
      dishes: [
        {
          id: 9,
          category_id: 4,
          name: "Cola",
          description:
            "Een verfrissend koolzuurhoudend frisdrank met een kenmerkende cola-smaak.",
          price: 2.5,
          position_index: 9,
        },
        {
          id: 10,
          category_id: 4,
          name: "Fanta",
          description:
            "Een fruitige en verfrissende frisdrank met een hint van sinaasappelaroma.",
          price: 2.5,
          position_index: 10,
        },
        {
          id: 11,
          category_id: 4,
          name: "Sprite",
          description:
            "Een sprankelende citroen-limoen frisdrank die verfrissend en dorstlessend is.",
          price: 2.5,
          position_index: 11,
        },
        {
          id: 12,
          category_id: 4,
          name: "Water",
          description:
            "Helder en puur drinkwater, perfect om je dorst te lessen.",
          price: 1.5,
          position_index: 12,
        },
      ],
    },
  ];

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
