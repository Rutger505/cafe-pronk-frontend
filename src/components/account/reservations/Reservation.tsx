import { ReservationData } from "@/ReservationData";

type NotAdminReservationProps = {
  reservation: ReservationData;
  admin?: false;
  onAccept?: null;
  onReject?: null;
};

type AdminReservationProps = {
  reservation: ReservationData;
  admin: true;
  onAccept: (reservation: ReservationData) => void;
  onReject: (reservation: ReservationData) => void;
};

type ReservationProps = NotAdminReservationProps | AdminReservationProps;

export default function Reservation({
  reservation,
  admin,
  onAccept,
  onReject,
}: Readonly<ReservationProps>) {
  // Format reservation date and time
  const reservationDateObject = new Date(reservation.datetime);
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
      <div className={"flex justify-between"}>
        <p className="text-lg font-semibold">Reservation {reservation.id}</p>
        {admin && reservation.pending && (
          <div>
            <button className={"mr-3"} onClick={() => onAccept(reservation)}>
              Accepteer
            </button>
            <button onClick={() => onReject(reservation)}>Weiger</button>
          </div>
        )}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm">
            Aantal personen: {reservation.party_size}
          </p>
          <p className="mb-2 text-sm">Datum: {reservationDate}</p>
          <p className="mb-2 text-sm">Tijd: {reservationTime}</p>

          {reservation.message && (
            <p className="mb-2 text-sm">Notitie: {reservation.message}</p>
          )}
        </div>
        <div>
          {!admin && (
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
          )}
        </div>
      </div>
    </div>
  );
}
