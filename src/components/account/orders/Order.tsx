import { OrderData } from "@/components/account/orders/OrdersList";

interface OrderProps {
  order: OrderData;
}

export default function Order({ order }: Readonly<OrderProps>) {
  const deliveryDateObject = new Date(order.delivery_date);
  const deliveryDate = deliveryDateObject.toLocaleDateString("nl-NL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const deliveryTime = deliveryDateObject.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const orderDateObject = new Date(order.created_at);
  const orderDate = orderDateObject.toLocaleDateString("nl-NL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const orderTime = orderDateObject.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="mb-5 rounded-normal border-2 border-secondary p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Bestelling {order.id}</h2>
        <p className="text-lg font-semibold">€{order.total_price.toFixed(2)}</p>
      </div>
      <div className="mb-4">
        <p className="text-sm">
          Bezorgd op {deliveryDate} om {deliveryTime}
        </p>
        <p className="text-sm">
          Besteld op {orderDate} om {orderTime}
        </p>
      </div>
      <h3 className="mb-2 text-md font-bold">Gerechten:</h3>
      <div>
        {order.dishes.map((dish) => (
          <>
            <div key={dish.id} className="flex justify-between">
              <p className="text-sm">{dish.dish.name}</p>
              <p className="text-sm">
                €{dish.dish.price.toFixed(2)} x {dish.quantity}
              </p>
            </div>
            <hr className={"text-secondary"} />
          </>
        ))}
      </div>
    </div>
  );
}
