interface BasketCheckoutButtonProps {
  price: number;
  onCheckout: () => void;
}

export default function BasketCheckoutButton({
  price,
  onCheckout,
}: Readonly<BasketCheckoutButtonProps>) {
  return (
    <button
      className={
        "w-full rounded-button bg-accent px-4 py-2 font-bold text-primary"
      }
      onClick={onCheckout}
    >
      Checkout ({price.toFixed(2)})
    </button>
  );
}
