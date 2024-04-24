"use client";

import { FormEvent, useState } from "react";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import axios from "axios";
import LoginContainer from "@/components/auth/LoginContainer";
import useUser from "@/hooks/useUser";

export default function Reservations() {
  const [formMessage, setFormMessage] = useState("");
  const [loginVisible, setLoginVisible] = useState(false);
  const [user, refreshUser] = useUser();

  function onLoginSuccess() {
    setLoginVisible(false);
    refreshUser();
  }

  function onLoginClose() {
    setLoginVisible(false);
  }

  async function onFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!user?.logged_in) {
      setLoginVisible(true);
      return;
    }

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const amount = formData.get("amount") as string;
    const dateTime = `${formData.get("date")} ${formData.get("time")}:00`;
    const comment = formData.get("comment") as string;

    const apiUri = `${process.env.NEXT_PUBLIC_API_URL}/reservations`;

    try {
      const response = await axios.post(
        apiUri,
        {
          party_size: amount,
          datetime: dateTime,
          name,
          message: comment,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      console.log(response.data);

      setFormMessage("Reservering geplaatst");
    } catch (error) {
      console.error(error);
      setFormMessage("Er ging iets mis met het plaatsen van de reservering");
    }
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
            <Input label={"Tijd*"} id={"time"} type={"time"} required />
          </div>
        </div>

        <TextArea label={"Opmerking"} id={"comment"} />

        <Button>Reserveren</Button>

        <p>{formMessage}</p>
      </form>

      {loginVisible && (
        <LoginContainer
          onLoginSuccess={onLoginSuccess}
          onLoginClose={onLoginClose}
        />
      )}
    </main>
  );
}
