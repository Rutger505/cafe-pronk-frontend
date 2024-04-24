"use client";

import ContactMessage from "@/components/account/contactMessages/ContactMessage";
import { ContactMessageData } from "@/ContactMessageData";
import { useEffect, useState } from "react";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function UserContactMessages() {
  const [contactMessages, setContactMessages] = useState<ContactMessageData[]>(
    [],
  );
  const [user] = useUser();
  const { push } = useRouter();

  if (user && !user.logged_in) {
    push("/account");
  }

  useEffect(() => {
    async function fetchContactMessages() {
      if (!user?.logged_in) return;

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/reservations`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      setContactMessages(response.data);
    }

    fetchContactMessages();
  }, [user]);
  return (
    <main>
      <h1 className={"mb-10 text-center text-xl"}>Contact berichten</h1>
      <ul className={"w-full"}>
        {contactMessages.map((contactMessage) => (
          <ContactMessage
            key={contactMessage.id}
            contactMessage={contactMessage}
          />
        ))}
      </ul>
    </main>
  );
}
