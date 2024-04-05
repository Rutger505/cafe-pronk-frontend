import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className={
        "flex h-20 items-center justify-between bg-primary px-10 shadow-standard"
      }
    >
      <Link href={"/"}>
        <Image
          height={38.4}
          width={199.2}
          src={"/thuisbezorgd.webp"}
          alt={"Thuisbezorgd logo"}
        />
      </Link>

      <div className={"flex items-center gap-x-5"}>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/reserveren"}>Reserveren</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/account"}>Account</Link>
        <Link href={"/admin"}>Admin</Link>
      </div>
    </header>
  );
}
