"use client";

import { useState } from "react";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";

export default function Reservations() {
  const [formMessage, setFormMessage] = useState<string>("");

  function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const amount = formData.get("amount") as string;
    const dateTime = `${formData.get("date")} ${formData.get("time")}:00`;
    const comment = formData.get("comment") as string;

    const apiUri = `${process.env.NEXT_PUBLIC_API_URL}/reservation/${name}/${amount}/${dateTime}/${comment}`;

    console.log("Posting reservation to:", apiUri);
    fetch(apiUri, { method: "POST" })
      .then((response) => {
        if (response.ok) {
          setFormMessage("Reservering geplaatst");
        } else {
          setFormMessage("Er is iets misgegaan");
        }
      })
      .catch((error) => {
        console.error("Error posting reservation:", error);
        setFormMessage("Er is iets misgegaan");
      });
  }

  return (
    <main className="flex flex-col items-center px-24 py-14">
      <h1 className={"mb-6 text-center text-xl"}>Reservering plaatsen</h1>

      <form className={"flex max-w-md flex-col"} onSubmit={onFormSubmit}>
        <Input label={"Naam*"} id={"name"} required />

        <Input
          label={"Aantal personen*"}
          id={"amount"}
          type={"number"}
          required
        />

        <div className={"grid grid-cols-2 gap-x-4"}>
          <div className={"flex flex-col"}>
            <Input label={"Datum*"} id={"date"} type={"date"} required />
          </div>
          <div className={"flex flex-col"}>
            <Input
              label={"Tijd*"}
              id={"time"}
              type={"time"}
              min={"16:00"}
              max={"21:00"}
              required
            />
          </div>
        </div>

        <TextArea label={"Opmerking"} id={"comment"} />

        <Button>Reserveren</Button>

        <p>{formMessage}</p>
      </form>
    </main>
  );
}
