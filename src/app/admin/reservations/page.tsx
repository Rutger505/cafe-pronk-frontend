import Reservation from "@/components/account/reservations";
import { ReservationData } from "@/ReservationData";

export default function ManageReservations() {
  // demo reservations json
  const reservations: ReservationData[] = [
    {
      id: 1,
      user_id: 2,
      people: 2,
      date: "2024-04-15 18:00",
      message: null,
      pending: 0,
      accepted: 0,
      created_at: "2024-04-15T20:52:12.000000Z",
      updated_at: "2024-04-15T20:52:12.000000Z",
    },
    {
      id: 2,
      user_id: 2,
      people: 4,
      date: "2024-04-16 19:00",
      message: "We are celebrating a birthday!",
      pending: 1,
      accepted: 0,
      created_at: "2024-04-15T20:52:12.000000Z",
      updated_at: "2024-04-15T20:52:12.000000Z",
    },
    {
      id: 3,
      user_id: 2,
      people: 3,
      date: "2024-04-16 19:00",
      message: "",
      pending: 0,
      accepted: 1,
      created_at: "2024-04-15T20:52:12.000000Z",
      updated_at: "2024-04-15T20:52:12.000000Z",
    },
  ];

  return (
    <main>
      <h1 className={"mb-10 text-center text-xl"}>Reservaties</h1>
      <h2 className={"mb-5 text-lg font-bold"}>Openstaanden reservaties</h2>
      <ul>
        {reservations
          .filter((reservation) => reservation.pending)
          .map((reservation) => (
            <li key={reservation.id}>
              <Reservation reservation={reservation} admin />
            </li>
          ))}
      </ul>
      <h2 className={"mb-5 text-lg font-bold"}>Alle reservaties</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <Reservation reservation={reservation} />
          </li>
        ))}
      </ul>
    </main>
  );
}
