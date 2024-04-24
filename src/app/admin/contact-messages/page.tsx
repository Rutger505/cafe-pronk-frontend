"use client";

import { ContactMessageData } from "@/ContactMessageData";
import ContactMessage from "@/components/account/contactMessages/ContactMessage";
import { useEffect, useState } from "react";
import useUser from "@/hooks/useUser";
import axios, { AxiosError } from "axios";

export default function ManageContactMessages() {
  const [contactMessages, setContactMessages] = useState<ContactMessageData[]>(
    [],
  );
  const [user] = useUser();

  useEffect(() => {
    async function fetchContactMessages() {
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

      setContactMessages(response.data);
    }

    fetchContactMessages();
  }, [user]);

  async function onMessageMarkAsRead(contactMessage: ContactMessageData) {
    if (!user?.logged_in) {
      console.error("User not logged in");
      return;
    }

    console.log("Marking message as read", contactMessage);

    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact/read/${contactMessage.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      console.log(response);

      setContactMessages((prevContactMessages) =>
        prevContactMessages.map((prevContactMessage) =>
          prevContactMessage.id === contactMessage.id
            ? { ...prevContactMessage, read: true }
            : prevContactMessage,
        ),
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(
          `Failed to mark message as read: ${error.response?.data.message}`,
          error,
        );
      } else {
        console.error(`Failed to mark message as read:`, error);
      }
      return;
    }
  }

  async function onMessageMarkAsUnread(contactMessage: ContactMessageData) {
    if (!user?.logged_in) {
      console.error("User not logged in");
      return;
    }

    console.log("Marking message as unread", contactMessage);

    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact-messages/unread/${contactMessage.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      setContactMessages((prevContactMessages) =>
        prevContactMessages.map((prevContactMessage) =>
          prevContactMessage.id === contactMessage.id
            ? { ...prevContactMessage, read: false }
            : prevContactMessage,
        ),
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(
          `Failed to mark message as unread: ${error.response?.data.message}`,
          error,
        );
      } else {
        console.error(`Failed to mark message as unread:`, error);
      }
      return;
    }
  }

  return (
    <main>
      <h1 className={"mb-10 text-center text-xl"}>Contact berichten</h1>
      <h2 className={"mb-5 text-lg font-bold"}>Ongelezen berichten</h2>
      <ul className={"w-full"}>
        {contactMessages
          .filter((contactMessage) => !contactMessage.read)
          .map((contactMessage) => (
            <ContactMessage
              key={contactMessage.id}
              contactMessage={contactMessage}
              admin
              onMarkAsRead={onMessageMarkAsRead}
              onMarkAsUnread={onMessageMarkAsUnread}
            />
          ))}
      </ul>

      <h2 className={"mb-5 text-lg font-bold"}>Alle berichten</h2>
      <ul className={"w-full"}>
        {contactMessages.map((contactMessage) => (
          <ContactMessage
            key={contactMessage.id}
            contactMessage={contactMessage}
            onMarkAsRead={onMessageMarkAsRead}
            onMarkAsUnread={onMessageMarkAsUnread}
            admin
          />
        ))}
      </ul>
    </main>
  );
}
