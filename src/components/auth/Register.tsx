import Input from "@/components/Input";
import Button from "@/components/Button";

interface RegisterProps {
  onRedirectToLogin: () => void;
}

export default function Register({
  onRedirectToLogin,
}: Readonly<RegisterProps>) {
  return (
    <div className={"flex flex-col items-center justify-between"}>
      <h1 className={"text-center text-xl font-bold"}>Registreren</h1>

      <form className={"mt-14 flex w-80 flex-col"}>
        <Input id={"name"} label={"Name"} type={"text"} required />
        <Input id={"email"} label={"Email"} type={"email"} required />
        <Input id={"password"} label={"Password"} type={"password"} required />
        <Button>Registreren</Button>
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
