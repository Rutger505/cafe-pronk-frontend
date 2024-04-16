import { ReservationData } from "@/app/account/reservations/page";

interface ReservationProps {
  reservation: ReservationData;
}

export default function Reservation({
  reservation,
}: Readonly<ReservationProps>) {
  const reservationDateObject = new Date(reservation.date);
  const reservationDate = reservationDateObject.toLocaleDateString("nl-NL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const reservationTime = reservationDateObject.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="mb-5 rounded-normal border-2 border-secondary p-6">
      <p className="text-lg font-semibold">Reservation {reservation.id}</p>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm">Aantal personen: {reservation.people}</p>
          <p className="mb-2 text-sm">Datum: {reservationDate}</p>
          <p className="mb-2 text-sm">Tijd: {reservationTime}</p>

          {reservation.message && (
            <p className="mb-2 text-sm">Notitie: {reservation.message}</p>
          )}
        </div>
        <div>
          <p className="mb-2 text-sm">
            Status:{" "}
            <span
              className={
                !reservation.pending && !reservation.accepted
                  ? "text-[#f00]"
                  : ""
              }
            >
              {reservation.pending
                ? "In behandeling"
                : reservation.accepted
                  ? "Goed gekeurd"
                  : "Geweigerd"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
