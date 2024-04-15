import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/";
import Footer from "@/components/footer/";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={"grid min-h-screen grid-cols-1 grid-rows-[auto_1fr]"}>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
