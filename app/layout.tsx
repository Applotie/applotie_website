import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalBackgroundAnimation from "@/components/animations/GlobalBackgroundAnimation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col">
        <div className="relative z-2">
          <Navbar />
          <div className="relative z-2">{children}</div>
          <Footer />
          <GlobalBackgroundAnimation />
        </div>
      </body>
    </html>
  );
}
