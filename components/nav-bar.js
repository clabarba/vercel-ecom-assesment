"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Warehouse } from "lucide-react"

import { cn } from "@/lib/utils";

const font = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-16 p-4 py-2">
      <div className="flex items-center">
        <Link href="/" className="flex items-center pr-10">
          <h1 className={cn("text-2xl font-bold text-white", font.className)}>
            Vercel Ecom Project
          </h1>
        </Link>
        <Link href="/" className="flex items-center">
        <Warehouse  size='20' className="text-white"/>
          <h1 className={cn("text-1xl text-white pl-1", font.className)}>
           Home
          </h1>
        </Link>
      </div>
    </nav>
  );
};
