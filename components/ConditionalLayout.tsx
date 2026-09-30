"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FooterTransition from "@/components/FooterTransition";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAdminPage = pathname.startsWith("/admin");

  if (isAdminPage) {
    return <main>{children}</main>;
  }

  return (
    <div className="relative z-[1]">
      <Navbar />

      <main>{children}</main>

      <FooterTransition />
      <Footer />
    </div>
  );
}