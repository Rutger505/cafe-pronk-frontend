"use client";

import Reservation from "@/components/account/reservations";
import { useEffect, useState } from "react";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ReservationData } from "@/ReservationData";

export default function UserReservations() {
  const [reservations, setReservations] = useState<ReservationData[]>([]);
  const [user] = useUser();
  const { push } = useRouter();

  if (user && !user.logged_in) {
    push("/account");
  }

  useEffect(() => {
    async function fetchReservations() {
      if (!user?.logged_in) return;

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/reservations`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      setReservations(response.data);
    }

    fetchReservations();
  }, [user]);

  return (
    <main>
      <h1 className={"mb-10 text-center text-xl"}>Reservaties</h1>
      <ul>
        {reservations.map((reservation) => (
          <Reservation key={reservation.id} reservation={reservation} />
        ))}
      </ul>
    </main>
  );
}
