"use client";

import { useState } from "react";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";

export default function Contact() {
  const [formMessage, setFormMessage] = useState<string>("");

  function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const business = formData.get("business") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const apiUri = `${process.env.NEXT_PUBLIC_API_URL}/contact/${name}/${business}/${email}/${subject}/${message}`;

    console.log("Posting contact message to:", apiUri);
    fetch(apiUri, { method: "POST" })
      .then((response) => {
        if (response.ok) {
          setFormMessage("Bericht verstuurd");
        } else {
          setFormMessage("Er is iets misgegaan");
        }
      })
      .catch((error) => {
        console.error("Error posting contact:", error);
        setFormMessage("Er is iets misgegaan");
      });
  }

  return (
    <main className="flex flex-col items-center px-24 py-14">
      <h1 className={"mb-6 text-center text-xl"}>Neem contact op</h1>

      <form className={"flex max-w-md flex-col"} onSubmit={onFormSubmit}>
        <div className={"grid grid-cols-2 gap-x-4"}>
          <div className={"flex flex-col"}>
            <Input label={"Naam*"} id={"name"} placeholder={"Naam"} required />
          </div>
          <div className={"flex flex-col"}>
            <Input label={"Bedrijf"} id={"business"} placeholder={"Bedrijf"} />
          </div>
        </div>

        <Input
          label={"Email*"}
          type={"email"}
          id={"email"}
          placeholder={"Email"}
          required
        />

        <Input
          label={"Onderwerp*"}
          type={"text"}
          id={"subject"}
          placeholder={"Onderwerp"}
          required
        />

        <TextArea
          label={"Bericht*"}
          id={"message"}
          placeholder={"Bericht"}
          required
        />

        <Button>Reserveren</Button>
        <p>{formMessage}</p>
      </form>
    </main>
  );
}
