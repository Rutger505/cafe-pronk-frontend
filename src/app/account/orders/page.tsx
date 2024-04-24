"use client";

import Order from "@/components/account/orders/Order";
import { useEffect, useState } from "react";
import axios from "axios";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";

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
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [user] = useUser();
  const { push } = useRouter();

  if (user && !user.logged_in) {
    push("/account");
  }

  useEffect(() => {
    async function fetchOrders() {
      if (!user?.logged_in) return;

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/orders`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      console.log(response.data);
      setOrders(response.data);
    }

    fetchOrders();
  }, [user]);

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
