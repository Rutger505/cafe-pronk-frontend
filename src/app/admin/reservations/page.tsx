"use client";

import Reservation from "@/components/account/reservations";
import { ReservationData } from "@/ReservationData";
import { useEffect, useState } from "react";
import useUser from "@/hooks/useUser";
import axios, { AxiosError } from "axios";

export default function ManageReservations() {
  const [reservations, setReservations] = useState<ReservationData[]>([]);
  const [user] = useUser();

  useEffect(() => {
    async function fetchReservations() {
      if (!user?.logged_in) return;

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/reservations`,
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

  async function onAcceptReservation(reservation: ReservationData) {
    if (!user?.logged_in) {
      console.error("User not logged in");
      return;
    }

    console.log("Accepting reservation", reservation);

    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/reservations/accept/${reservation.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      setReservations((prevReservations) =>
        prevReservations.map((prevReservation) =>
          prevReservation.id === reservation.id
            ? { ...prevReservation, pending: false, accepted: true }
            : prevReservation,
        ),
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(
          `Failed to accept reservation: ${error.response?.data.message}`,
          error,
        );
      } else {
        console.error(`Failed to accept reservation:`, error);
      }
      return;
    }
  }

  async function onRejectReservation(reservation: ReservationData) {
    if (!user?.logged_in) {
      console.error("User not logged in");
      return;
    }

    console.log("Rejecting reservation", reservation);

    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/reservations/decline/${reservation.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      setReservations((prevReservations) =>
        prevReservations.map((prevReservation) =>
          prevReservation.id === reservation.id
            ? { ...prevReservation, pending: false, accepted: false }
            : prevReservation,
        ),
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(
          `Failed to reject reservation: ${error.response?.data.message}`,
          error,
        );
      } else {
        console.error(`Failed to reject reservation:`, error);
      }
      return;
    }
  }

  return (
    <main>
      <h1 className={"mb-10 text-center text-xl"}>Reservaties</h1>
      <h2 className={"mb-5 text-lg font-bold"}>Openstaanden reservaties</h2>
      <ul>
        {reservations
          .filter((reservation) => reservation.pending)
          .map((reservation) => (
            <li key={reservation.id}>
              <Reservation
                reservation={reservation}
                admin
                onAccept={onAcceptReservation}
                onReject={onRejectReservation}
              />
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
