"use client";

import { useState } from "react";

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
          <label htmlFor="name">Naam*</label>
          <label htmlFor="business">Bedrijf</label>

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
          <input
            className={
              "mb-5 rounded-normal border-[1px] border-tertiary px-4 py-2"
            }
            type="text"
            id="business"
            name="business"
            placeholder="Bedrijf"
          />
        </div>

        <label htmlFor={"email"}>Email*</label>
        <input
          className={
            "mb-5 rounded-normal border-[1px] border-tertiary px-4 py-2"
          }
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />

        <label htmlFor={"subject"}>Onderwerp*</label>
        <input
          className={
            "mb-5 rounded-normal border-[1px] border-tertiary px-4 py-2"
          }
          type="text"
          id="subject"
          name="subject"
          placeholder="Onderwerp"
          required
        />

        <label htmlFor="message">Bericht*</label>
        <textarea
          className={
            "mb-5 rounded-normal border-[1px] border-tertiary px-3 py-2"
          }
          id="message"
          name="message"
          placeholder="Bericht"
          required
        />

        <button
          className={"rounded-button bg-accent px-4 py-2 text-primary"}
          type="submit"
        >
          Reserveren
        </button>
        <p>{formMessage}</p>
      </form>
    </main>
  );
}
