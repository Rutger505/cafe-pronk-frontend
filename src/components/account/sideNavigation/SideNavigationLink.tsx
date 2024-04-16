import { ReactNode } from "react";
import Link from "next/link";

interface SideNavigationLinkProps {
  href: string;
  children: ReactNode;
}

export default function SideNavigationLink({
  href,
  children,
}: Readonly<SideNavigationLinkProps>) {
  return (
    <Link href={href} className={"rounded-normal px-4 py-2 hover:bg-secondary"}>
      {children}
    </Link>
  );
}
