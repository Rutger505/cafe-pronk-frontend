import ReservationsList from "@/components/account/reservations";

export default function Reservations() {
  return (
    <main>
      <h1 className={"mb-10 text-center text-xl"}>Reservaties</h1>
      <div className={"flex w-full flex-col items-start"}>
        <ReservationsList />
      </div>
    </main>
  );
}
