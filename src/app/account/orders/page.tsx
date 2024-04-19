import Order from "@/components/account/orders/Order";

export interface OrderData {
  id: number;
  user_id: number;
  total_price: number;
  delivery_date: string;
  created_at: string;
  updated_at: string;
  dishes: DishQuantity[];
}

export interface DishQuantity {
  id: number;
  order_id: number;
  dish_id: number;
  quantity: number;
  dish: DishData;
}

export interface DishData {
  id: number;
  category_id: number;
  name: string;
  description: string;
  price: number;
  position_index: number;
}

export default function UserOrders() {
  // demo order json
  const orders: OrderData[] = [
    {
      id: 1,
      user_id: 2,
      total_price: 30,
      delivery_date: "2024-04-14 20:00:00",
      created_at: "2024-04-15T20:52:12.000000Z",
      updated_at: "2024-04-15T20:52:12.000000Z",
      dishes: [
        {
          id: 1,
          order_id: 1,
          dish_id: 1,
          quantity: 2,
          dish: {
            id: 1,
            category_id: 1,
            name: "Bitterballen",
            description:
              "Een heerlijke Nederlandse snack. Wordt geserveerd met mosterd.",
            price: 5.5,
            position_index: 1,
          },
        },
        {
          id: 2,
          order_id: 1,
          dish_id: 2,
          quantity: 1,
          dish: {
            id: 2,
            category_id: 1,
            name: "Brood plank",
            description:
              "Een assortiment van vers brood geserveerd met verschillende dips en spreads, perfect als voorgerecht.",
            price: 6.5,
            position_index: 2,
          },
        },
        {
          id: 3,
          order_id: 1,
          dish_id: 3,
          quantity: 3,
          dish: {
            id: 3,
            category_id: 2,
            name: "Pizza margherita",
            description:
              "Een klassieke Italiaanse pizza met tomatensaus, mozzarella en verse basilicum.",
            price: 8.5,
            position_index: 3,
          },
        },
      ],
    },
    {
      id: 2,
      user_id: 2,
      total_price: 30,
      delivery_date: "2024-04-14 20:00:00",
      created_at: "2024-04-15T20:52:12.000000Z",
      updated_at: "2024-04-15T20:52:12.000000Z",
      dishes: [
        {
          id: 5,
          order_id: 1,
          dish_id: 1,
          quantity: 2,
          dish: {
            id: 1,
            category_id: 1,
            name: "Bitterballen",
            description:
              "Een heerlijke Nederlandse snack. Wordt geserveerd met mosterd.",
            price: 5.5,
            position_index: 1,
          },
        },
        {
          id: 6,
          order_id: 1,
          dish_id: 2,
          quantity: 1,
          dish: {
            id: 2,
            category_id: 1,
            name: "Brood plank",
            description:
              "Een assortiment van vers brood geserveerd met verschillende dips en spreads, perfect als voorgerecht.",
            price: 6.5,
            position_index: 2,
          },
        },
        {
          id: 7,
          order_id: 1,
          dish_id: 3,
          quantity: 3,
          dish: {
            id: 3,
            category_id: 2,
            name: "Pizza margherita",
            description:
              "Een klassieke Italiaanse pizza met tomatensaus, mozzarella en verse basilicum.",
            price: 8.5,
            position_index: 3,
          },
        },
        {
          id: 8,
          order_id: 1,
          dish_id: 3,
          quantity: 3,
          dish: {
            id: 3,
            category_id: 2,
            name: "Sprite",
            description:
              "Een klassieke Italiaanse pizza met tomatensaus, mozzarella en verse basilicum.",
            price: 3,
            position_index: 3,
          },
        },
      ],
    },
  ];

  return (
    <main>
      <h1 className={"mb-10 text-center text-xl"}>Bestellingen</h1>
      <ul>
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </ul>
    </main>
  );
}
