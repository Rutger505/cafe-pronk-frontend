import Link from "next/link";

export default function NotFOund() {
  return (
    <main className={"flex h-screen items-center justify-center"}>
      <div className={" flex flex-col items-center gap-5"}>
        <h1 className={"-mt-10 text-xl font-medium text-accent"}>
          404 | This page could not be found.
        </h1>
        <Link href={"/"} className={"text-lg font-bold text-accent"}>
          Go back
        </Link>
      </div>
    </main>
  );
}
