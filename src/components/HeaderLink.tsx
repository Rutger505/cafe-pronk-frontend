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
      className={`${className} ${href === path && "bg-secondary"} rounded-button px-3 py-1 text-sm hover:bg-secondary`}
      href={href}
      {...rest}
    >
      {props.children}
    </Link>
  );
}
