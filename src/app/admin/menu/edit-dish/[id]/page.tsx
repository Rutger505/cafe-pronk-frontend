import Input from "@/components/Input";
import Button from "@/components/Button";

interface CreateCategoryProps {
  params: {
    id: string;
  };
}

export default function CreateCategory({
  params,
}: Readonly<CreateCategoryProps>) {
  return (
    <main className={"flex flex-col items-center"}>
      <h1 className={"mb-10 text-center text-xl"}>Gerecht Wijzigen</h1>

      <form className={"flex flex-col"}>
        <Input
          label={"Gerecht naam"}
          id={"name"}
          defaultValue={`<naam van gerecht ${params.id}>`}
        />

        <Input
          label={"Beschrijving"}
          id={"description"}
          defaultValue={`<beschrijving van gerecht ${params.id}>`}
        />

        <Input
          label={"Prijs"}
          id={"price"}
          defaultValue={`<prijs van gerecht ${params.id}>`}
        />

        <Button>Wijzig Gerecht</Button>
      </form>
    </main>
  );
}
