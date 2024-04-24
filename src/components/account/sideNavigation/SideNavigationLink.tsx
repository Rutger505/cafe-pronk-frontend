"use client";

import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface SideNavigationLinkProps extends LinkProps {
  href: string;
  children: ReactNode;
}

export default function SideNavigationLink({
  href,
  children,
  ...rest
}: Readonly<SideNavigationLinkProps>) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${path == href ? "bg-secondary" : "hover:bg-secondary"} rounded-button !bg-opacity-60 px-5 py-2`}
      {...rest}
    >
      {children}
    </Link>
  );
}
