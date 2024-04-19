import Input from "@/components/Input";
import Button from "@/components/Button";

interface LoginProps {
  onRedirectToRegister: () => void;
}

export default function Login({ onRedirectToRegister }: Readonly<LoginProps>) {
  return (
    <div className={"flex flex-col items-center justify-between"}>
      <h1 className={"text-center text-xl font-bold"}>Inloggen</h1>

      <form className={"mt-14 flex w-80 flex-col"}>
        <Input id={"email"} label={"Email"} type={"email"} required />
        <Input id={"password"} label={"Password"} type={"password"} required />
        <Button>Inloggen</Button>
      </form>

      <p className={"mt-10"}>
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
