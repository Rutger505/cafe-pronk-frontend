import Link from "next/link";

export default function AdminDashBoard() {
  return (
    <main>
      <h1 className={"mb-10 text-center text-xl"}>Admin Dashboard</h1>
      <h2 className={"mb-5 text-lg font-bold"}>Hello &lt;user name&gt;</h2>
      <p>
        Open{" "}
        <Link className={"text-[-webkit-link]"} href={"admin/reservations"}>
          reservaties
        </Link>
        : &lt;number of pending reservations&gt;
      </p>
      <p>
        Ongelezen{" "}
        <Link className={"text-[-webkit-link]"} href={"admin/contactMessages"}>
          contact berichten
        </Link>
        : &lt;number of products&gt;
      </p>
    </main>
  );
}
