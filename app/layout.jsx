import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  title: "Applotie Technologies | Down for maintenance",
  description: "Applotie's website is down for scheduled maintenance. We'll be back shortly.",
};

export const viewport = {
  themeColor: "#ff2d2d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
