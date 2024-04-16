"use client";

import { useState } from "react";

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
        <label htmlFor="name">Naam*</label>
        <input
          className={
            "mb-5 rounded-normal border-[1px] border-tertiary px-4 py-2"
          }
          type="text"
          id="name"
          name="name"
          placeholder="Naam"
          required
        />

        <label htmlFor="amount">Aantal personen*</label>
        <input
          className={
            "mb-5 rounded-normal border-[1px] border-tertiary px-4 py-2"
          }
          type="number"
          id="amount"
          name="amount"
          placeholder="Aantal personen"
          required
        />

        <div className={"grid grid-cols-2 gap-x-4"}>
          <label htmlFor="date">Datum*</label>
          <label htmlFor="time">Tijd*</label>

          <input
            className={
              "mb-5 rounded-normal border-[1px] border-tertiary px-4 py-2"
            }
            type="date"
            id="date"
            name="date"
            required
          />
          <input
            className={
              "mb-5 rounded-normal border-[1px] border-tertiary px-4 py-2"
            }
            type="time"
            id="time"
            name="time"
            min="12:00"
            max="21:00"
            required
          />
        </div>

        <label htmlFor="comment">Opmerking</label>
        <textarea
          className={
            "mb-5 rounded-normal border-[1px] border-tertiary px-3 py-1"
          }
          id="comment"
          name="comment"
          placeholder="Opmerking"
        />

        <button
          className={"rounded-button bg-accent px-6 py-2 text-primary"}
          type="submit"
        >
          Reserveren
        </button>
        <p>{formMessage}</p>
      </form>
    </main>
  );
}
