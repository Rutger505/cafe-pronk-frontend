"use client";

import { ReactNode } from "react";
import useUser from "@/hooks/useUser";

interface AdminOnlyProps {
  children: ReactNode;
}

export default function AdminOnly({ children }: AdminOnlyProps) {
  const [user] = useUser();

  if (!user?.logged_in || !user?.is_admin) {
    return null;
  }

  return children;
}
