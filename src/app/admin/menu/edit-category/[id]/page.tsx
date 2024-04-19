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
      <h1 className={"mb-10 text-center text-xl"}>Categorie Wijzigen</h1>

      <form className={"flex flex-col"}>
        <Input
          label={"Categorie naam"}
          id={"name"}
          defaultValue={`<naam van categorie ${params.id}>`}
        />
        <Button>Wijzig Categorie</Button>
      </form>
    </main>
  );
}
