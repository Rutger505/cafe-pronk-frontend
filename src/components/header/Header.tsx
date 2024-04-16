import Link from "next/link";
import HeaderLink from "./HeaderLink";
import { Graduate } from "@next/font/google";

const graduate = Graduate({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  return (
    <header
      className={
        "flex h-16 items-center justify-between bg-[#000] px-10 shadow-bottom"
      }
    >
      <Link href={"/"}>
        <p className={graduate.className + " text-[22px] text-primary"}>
          Cafe Pronk
        </p>
      </Link>

      <div className={"flex items-center gap-x-5"}>
        <HeaderLink href={"/menu"}>Menu</HeaderLink>
        <HeaderLink href={"/reservations"}>Reserveren</HeaderLink>
        <HeaderLink href={"/contact"}>Contact</HeaderLink>
        <HeaderLink href={"/account"}>Account</HeaderLink>
        <HeaderLink href={"/admin"}>Admin</HeaderLink>
      </div>
    </header>
  );
}
