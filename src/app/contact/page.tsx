"use client";

import { useState } from "react";

export default function Reserveren() {
  const [formMessage, setFormMessage] = useState<string>("");

  function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const business = formData.get("business") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const comment = formData.get("comment") as string;

    const apiUri = `${process.env.NEXT_PUBLIC_API_URL}/contact/${name}/${business}/${email}/${subject}/${comment}`;

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
    <main className="flex flex-col items-center px-24 py-10">
      <h1 className={"text-center text-xl"}>Neem contact op</h1>

      <form className={"mt-5 flex flex-col"} onSubmit={onFormSubmit}>
        <label htmlFor="name">Naam</label>
        <input
          className={
            "mb-5 rounded-button border-[1px] border-tertiary px-6 py-1"
          }
          type="text"
          id="name"
          name="name"
          placeholder="Naam"
          required
        />

        <label htmlFor="business">Bedrijf</label>
        <input
          className={
            "mb-5 rounded-button border-[1px] border-tertiary px-6 py-1"
          }
          type="text"
          id="business"
          name="business"
          placeholder="Bedrijf"
        />

        <label htmlFor={"email"}>Email</label>
        <input
          className={
            "mb-5 rounded-button border-[1px] border-tertiary px-6 py-1"
          }
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />

        <label htmlFor={"subject"}>Onderwerp</label>
        <input
          className={
            "mb-5 rounded-button border-[1px] border-tertiary px-6 py-1"
          }
          type="text"
          id="subject"
          name="subject"
          placeholder="Onderwerp"
          required
        />

        <label htmlFor="comment">Opmerking</label>
        <textarea
          className={
            "mb-5 rounded-normal border-[1px] border-tertiary px-3 py-1"
          }
          id="comment"
          name="comment"
          placeholder="Opmerking"
          required
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
