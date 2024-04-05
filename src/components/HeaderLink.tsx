"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface HeaderLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function HeaderLink(props: Readonly<HeaderLinkProps>) {
  const { className, href, ...rest } = props;
  const path = usePathname();

  return (
    <Link
      className={`${className} ${href === path && "bg-secondary"} rounded-2xl px-3 py-1 hover:bg-secondary`}
      href={href}
      {...rest}
    >
      {props.children}
    </Link>
  );
}
