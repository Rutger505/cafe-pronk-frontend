import SideNavigation from "@/components/account/sideNavigation";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function AccountOverview() {
  return (
    <main className="flex flex-col items-center px-24 py-14">
      <div className={"grid w-full max-w-7xl grid-cols-[1fr_2fr_1fr] gap-x-24"}>
        <SideNavigation />
        <div className={"flex flex-col items-center"}>
          <h1 className={"mb-10 text-xl "}>Accountoverzicht</h1>
          <div className={"flex w-full flex-col items-start"}>
            <h2 className={"text-lg"}>Hallo Rutger!</h2>
            <p className={"text-md"}>rutger@email.com</p>

            <form className={"my-10"}>
              <h3 className={"mb-4 text-md font-bold"}>Wijzig E-mailadres</h3>
              <Input
                label={"Nieuw E-mailadres"}
                id={"new-email"}
                type={"email"}
              />

              <Input
                label={"Huidig Wachtwoord"}
                id={"current-password"}
                type={"password"}
              />
              <Button>Wijzig E-mailadres</Button>
            </form>
            <form>
              <h3 className={"mb-4 text-md font-bold"}>Wijzig Wachtwoord</h3>
              <Input
                label={"Huidig Wachtwoord"}
                id={"current-password"}
                type={"password"}
              />
              <Input
                label={"Nieuw Wachtwoord"}
                id={"new-password"}
                type={"password"}
              />
              <Input
                label={"Herhaal Nieuw Wachtwoord"}
                id={"confirm-password"}
                type={"password"}
              />
              <Button>Wijzig Wachtwoord</Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
