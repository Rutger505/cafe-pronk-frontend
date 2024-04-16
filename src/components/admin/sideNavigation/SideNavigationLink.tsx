"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideNavigationLinkProps {
  href: string;
  children: ReactNode;
}

export default function SideNavigationLink({
  href,
  children,
}: Readonly<SideNavigationLinkProps>) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${path == href ? "bg-secondary" : "hover:bg-secondary"} rounded-button !bg-opacity-60 px-5 py-2`}
    >
      {children}
    </Link>
  );
}
