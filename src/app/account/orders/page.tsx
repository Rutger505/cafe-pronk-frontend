import OrdersList from "@/components/account/orders";

export default function Orders() {
  return (
    <main className={"flex flex-col items-center"}>
      <h1 className={"mb-10 text-xl "}>Bestellingen</h1>
      <div className={"flex w-full flex-col items-start"}>
        <OrdersList />
      </div>
    </main>
  );
}
