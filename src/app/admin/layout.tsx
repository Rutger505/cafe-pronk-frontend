"use client";

import "@/app/globals.css";
import SideNavigation from "@/components/admin/sideNavigation";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user] = useUser();
  const { push } = useRouter();

  if (!user) {
    return null;
  }

  if (!user?.logged_in || !user.is_admin) {
    push("/");
  }

  return (
    <div className="flex flex-col items-center px-24 py-14">
      <div className={"grid w-full max-w-7xl grid-cols-[1fr_2fr_1fr] gap-x-24"}>
        <SideNavigation />
        {children}
      </div>
    </div>
  );
}
