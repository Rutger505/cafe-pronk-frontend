interface BasketCheckoutButtonProps {
  price: number;
}

export default function BasketCheckoutButton({
  price,
}: Readonly<BasketCheckoutButtonProps>) {
  return (
    <button
      className={
        "w-full rounded-button bg-accent px-4 py-2  font-bold text-primary "
      }
    >
      Checkout ({price.toFixed(2)})
    </button>
  );
}
