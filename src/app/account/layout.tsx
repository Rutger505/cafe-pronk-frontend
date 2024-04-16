import { Inter } from "next/font/google";
import "@/app/globals.css";
import SideNavigation from "@/components/account/sideNavigation";

const inter = Inter({ subsets: ["latin"] });

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center px-24 py-14">
      <div className={"grid w-full max-w-7xl grid-cols-[1fr_2fr_1fr] gap-x-24"}>
        <SideNavigation />
        {children}
      </div>
    </div>
  );
}
