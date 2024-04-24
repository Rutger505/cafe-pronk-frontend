import Input from "@/components/Input";
import Button from "@/components/Button";

export default function CreateCategory() {
  return (
    <main className={"flex flex-col items-center"}>
      <h1 className={"mb-10 text-center text-xl"}>Nieuwe Categorie</h1>

      <form className={"flex flex-col"}>
        <Input label={"Categorie naam"} id={"name"} />
        <Button>Maak categorie aan</Button>
      </form>
    </main>
  );
}
