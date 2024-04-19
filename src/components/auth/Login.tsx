import Input from "@/components/Input";
import Button from "@/components/Button";
import { FormEvent, useState } from "react";

interface LoginProps {
  onRedirectToRegister: () => void;
  onLoginSuccess: () => void;
}

export default function Login({
  onRedirectToRegister,
  onLoginSuccess,
}: Readonly<LoginProps>) {
  const [formText, setFormText] = useState("");

  async function onLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    if (!response.ok) {
      setFormText("Ongeldige inloggegevens");
      return;
    } else {
      setFormText("Inloggen gelukt!");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);

    onLoginSuccess();
  }

  return (
    <div className={"flex flex-col items-center justify-between"}>
      <h1 className={"text-center text-xl font-bold"}>Inloggen</h1>

      <form onSubmit={onLogin} className={"mt-14 flex w-80 flex-col"}>
        <Input
          id={"email"}
          label={"Email"}
          type={"email"}
          autoComplete={"username"}
          required
        />
        <Input
          id={"password"}
          label={"Password"}
          type={"password"}
          autoComplete={"current-password"}
          required
        />
        <Button>Inloggen</Button>
        <p className={"mt-2 text-center text-sm"}>{formText}</p>
      </form>

      <p className={"mt-8"}>
        Heb je nog geen account?{" "}
        <button
          className={"text-[-webkit-link]"}
          onClick={onRedirectToRegister}
        >
          Registreren
        </button>
      </p>
    </div>
  );
}
