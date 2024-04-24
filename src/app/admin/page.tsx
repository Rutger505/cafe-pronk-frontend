"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/useUser";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashBoard() {
  const { push } = useRouter();
  const [user] = useUser();
  const [numberOfPendingReservations, setNumberOfPendingReservations] =
    useState(0);
  const [numberOfUnreadContactMessages, setNumberOfUnreadContactMessages] =
    useState(0);

  useEffect(() => {
    async function fetchNumberOfPendingReservations() {
      if (!user?.logged_in) {
        return;
      }

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/reservations`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      setNumberOfPendingReservations(response.data.length);
    }
    async function fetchNumberOfUnreadContactMessages() {
      if (!user?.logged_in) {
        return;
      }

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      setNumberOfUnreadContactMessages(response.data.length);
    }
    fetchNumberOfPendingReservations();
    fetchNumberOfUnreadContactMessages();
  }, [user]);

  if (!user) {
    return null;
  }

  if (user && !user.logged_in) {
    push("/login");
    return;
  }

  return (
    <main>
      <h1 className={"mb-10 text-center text-xl"}>Admin Dashboard</h1>
      <h2 className={"mb-5 text-lg font-bold"}>Hello {user.name}</h2>
      <p>
        Open{" "}
        <Link className={"text-[-webkit-link]"} href={"admin/reservations"}>
          reservaties
        </Link>
        : {numberOfPendingReservations}
      </p>
      <p>
        Ongelezen{" "}
        <Link className={"text-[-webkit-link]"} href={"admin/contact-messages"}>
          contact berichten
        </Link>
        : {numberOfUnreadContactMessages}
      </p>
    </main>
  );
}
