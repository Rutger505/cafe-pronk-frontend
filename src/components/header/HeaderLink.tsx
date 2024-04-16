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
      className={`${className} ${href === path && "bg-[#222]"}
       rounded-button  px-5 py-2 text-sm text-primary transition-all duration-75 hover:bg-[#222]`}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}
