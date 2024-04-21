"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import useUser from "@/hooks/useUser";
import LoginContainer from "@/components/auth/LoginContainer";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";

export default function AccountOverview() {
  const { push } = useRouter();
  const [formText, setFormText] = useState("");
  const [user, refreshUser] = useUser();

  function onLoginSuccess() {
    refreshUser();
  }

  function onLoginClose() {
    push("/");
  }

  async function onInformationChange(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const newPassword = formData.get("new-password") as string;
    const currentPassword = formData.get("current-password") as string;

    if (!user?.logged_in) {
      setFormText("Er is iets fout gegaan. Probeer de pagina te herladen.");
      return;
    }

    setFormText("");
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/user`,
        {
          name,
          email,
          password: newPassword,
          currentPassword,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      refreshUser();

      setFormText("Uw gegevens zijn succesvol aangepast.");

      console.log(response);
    } catch (error) {
      if (error instanceof AxiosError && error.status === 400) {
        setFormText("Ongeldige inloggegevens");
        return;
      }

      setFormText("Er is iets fout gegaan. Probeer het later opnieuw.");
      console.error(error);
    }
  }

  return (
    <main>
      <h1 className={"mb-10 text-center text-xl"}>Accountoverzicht</h1>

      {!user?.logged_in ? (
        <p>Aan het laden...</p>
      ) : (
        user.logged_in && (
          <div className={"flex w-full flex-col items-start"}>
            <h2 className={"mb-5 text-lg"}>Welkom {user.name}!</h2>
            <form
              onSubmit={onInformationChange}
              className={"mt-8 grid grid-cols-2 grid-rows-2 gap-x-4"}
            >
              <div>
                <Input
                  label={"Naam*"}
                  id={"name"}
                  defaultValue={user.name}
                  required
                />
              </div>
              <div>
                <Input
                  label={"E-mailadres*"}
                  id={"email"}
                  type={"email"}
                  defaultValue={user.email}
                  required
                />
              </div>
              <div>
                <Input
                  label={"Nieuw Wachtwoord"}
                  id={"new-password"}
                  type={"password"}
                />
              </div>
              <div>
                <Input
                  label={"Huidig Wachtwoord*"}
                  id={"current-password"}
                  type={"password"}
                  required
                />
              </div>
              <p>{formText}</p>
              <Button className={"my-auto ml-auto h-fit w-32"}>Opslaan</Button>
            </form>
          </div>
        )
      )}

      {user && !user.logged_in && (
        <LoginContainer
          onLoginSuccess={onLoginSuccess}
          onLoginClose={onLoginClose}
        />
      )}
    </main>
  );
}
