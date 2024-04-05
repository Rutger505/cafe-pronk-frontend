import Link from "next/link";
import Image from "next/image";
import HeaderLink from "@/components/HeaderLink";

export default function Header() {
  return (
    <header
      className={
        "flex h-16 items-center justify-between bg-primary px-10 shadow-standard"
      }
    >
      <Link href={"/"}>
        <Image
          height={32}
          width={166}
          src={"/thuisbezorgd.webp"}
          alt={"Thuisbezorgd logo"}
        />
      </Link>

      <div className={"flex items-center gap-x-5"}>
        <HeaderLink href={"/menu"}>Menu</HeaderLink>
        <HeaderLink href={"/reserveren"}>Reserveren</HeaderLink>
        <HeaderLink href={"/contact"}>Contact</HeaderLink>
        <HeaderLink href={"/account"}>Account</HeaderLink>
        <HeaderLink href={"/admin"}>Admin</HeaderLink>
      </div>
    </header>
  );
}
