import { Graduate } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";

const graduate = Graduate({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden bg-[#cccccc] p-24">
      {/* Background image with a gray overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/cafe.jpg"}
          alt="Background"
          height={9999}
          width={9999}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#030303] opacity-40"></div>
      </div>

      <h1
        className={
          graduate.className + " z-10 -mt-10 mb-10 text-[40px] text-primary"
        }
      >
        Cafe Pronk
      </h1>
      <h2 className="z-10 mb-4 text-[60px] text-primary">Order Online</h2>
      <Link
        href={"/menu"}
        className="rounded-small z-10 bg-accent px-5 py-2 text-[18px] text-primary"
      >
        View Menu
      </Link>
    </main>
  );
}
