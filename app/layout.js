import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vercel Ecom Project",
  description: "Take home assesment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-full bg-[#111827] overflow-all align-middle">
          <Navbar />
            <div className="h-full w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
