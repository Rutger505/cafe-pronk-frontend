"use client";

import { useState } from "react";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import axios from "axios";
import useUser from "@/hooks/useUser";

export default function Contact() {
  const [formMessage, setFormMessage] = useState<string>("");
  const [user] = useUser();

  async function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const business = formData.get("business") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const apiUri = `${process.env.NEXT_PUBLIC_API_URL}/contact`;

    const authHeader = user?.logged_in
      ? { Authorization: `Bearer ${user.token}` }
      : null;

    try {
      const response = await axios.post(
        apiUri,
        {
          name,
          business,
          email,
          subject,
          message,
        },
        {
          headers: {
            Accept: "application/json",
            ...authHeader,
          },
        },
      );

      setFormMessage(
        "Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.",
      );
    } catch (error) {
      setFormMessage("Er is iets fout gegaan. Probeer het later opnieuw.");
    }
  }

  return (
    <main className="flex flex-col items-center px-24 py-14">
      <h1 className={"mb-6 text-center text-xl"}>Neem contact op</h1>

      <form className={"flex max-w-md flex-col"} onSubmit={onFormSubmit}>
        <div className={"grid grid-cols-2 gap-x-4"}>
          <div className={"flex flex-col"}>
            <Input label={"Naam*"} id={"name"} required />
          </div>
          <div className={"flex flex-col"}>
            <Input label={"Bedrijf"} id={"business"} />
          </div>
        </div>

        <Input label={"Email*"} type={"email"} id={"email"} required />

        <Input label={"Onderwerp*"} id={"subject"} required />

        <TextArea label={"Bericht*"} id={"message"} required />

        <Button>Reserveren</Button>
        <p>{formMessage}</p>
      </form>
    </main>
  );
}
