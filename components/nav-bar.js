"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";

const font = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

export const Navbar = () => {

  return (
    <nav className="flex items-center justify-between w-full h-16 p-4 py-2">
        <Link href="/" className="flex items-center float-right">
            <h1 className={cn("text-2xl font-bold text-white", font.className)}>Vercel Ecom Project</h1>
        </Link>
    </nav>
  );
};
