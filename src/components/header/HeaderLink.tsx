"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface HeaderLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function HeaderLink({
  className,
  href,
  children,
  ...rest
}: Readonly<HeaderLinkProps>) {
  const path = usePathname();

  return (
    <Link
      className={`${className} ${href === path && "bg-secondary"} rounded-button !bg-opacity-60 px-4 py-1 text-sm hover:bg-secondary`}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}
