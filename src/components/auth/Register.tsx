import Input from "@/components/Input";
import Button from "@/components/Button";
import { FormEvent, useState } from "react";

interface RegisterProps {
  onRedirectToLogin: () => void;
  onRegisterSuccess: () => void;
}

export default function Register({
  onRedirectToLogin,
  onRegisterSuccess,
}: Readonly<RegisterProps>) {
  const [formText, setFormText] = useState("");

  async function onRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/register`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    if (!response.ok) {
      setFormText("Registreren mislukt");
      return;
    } else {
      setFormText("Registreren gelukt!");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);

    onRegisterSuccess();
  }

  return (
    <div className={"flex flex-col items-center justify-between"}>
      <h1 className={"text-center text-xl font-bold"}>Registreren</h1>

      <form className={"mt-14 flex w-80 flex-col"} onSubmit={onRegister}>
        <Input id={"name"} label={"Name"} type={"text"} required />
        <Input id={"email"} label={"Email"} type={"email"} required />
        <Input id={"password"} label={"Password"} type={"password"} required />
        <Button>Registreren</Button>
        <p className={"mt-2 text-center text-sm"}>{formText}</p>
      </form>

      <p className={"mt-10"}>
        Heb je al een account?{" "}
        <button className={"text-[-webkit-link]"} onClick={onRedirectToLogin}>
          Inloggen
        </button>
      </p>
    </div>
  );
}
