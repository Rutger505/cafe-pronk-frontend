import Input from "@/components/Input";
import Button from "@/components/Button";

export default function AccountOverview() {
  return (
    <main className={"flex flex-col items-center"}>
      <h1 className={"mb-10 text-xl "}>Accountoverzicht</h1>
      <div className={"flex w-full flex-col items-start"}>
        <h2 className={"mb-5 text-lg"}>Welkom &lt;user name&gt;</h2>
        <form className={"mt-8 grid grid-cols-2 grid-rows-2 gap-x-4"}>
          <div>
            <Input label={"Naam*"} id={"name"} value={"<user name>"} required />
          </div>
          <div>
            <Input
              label={"E-mailadres*"}
              id={"email"}
              type={"email"}
              value={"<user email>"}
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
          <Button className={"col-end-3 my-auto ml-auto h-fit w-32"}>
            Opslaan
          </Button>
        </form>
      </div>
    </main>
  );
}
