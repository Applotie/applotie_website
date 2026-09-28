import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FooterTransition from "@/components/FooterTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Applotie Technologies | Digital products that perform",
  description:
    "Applotie Technologies builds high-performing websites, apps and growth systems for ambitious businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className="
          relative
          min-h-screen
          overflow-x-hidden
          bg-[#111318]
          text-white
        "
      >
                {/* WEBSITE */}
        <div className="relative z-[1]">
          <Navbar />

          <main>{children}</main>
          <FooterTransition />
          <Footer />
        </div>
      </body>
    </html>
  );
}