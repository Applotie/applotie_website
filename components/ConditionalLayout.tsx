"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FooterTransition from "@/components/FooterTransition";

export default function ConditionalLayout({
  children,
  globalGrid,
}: {
  children: React.ReactNode;
  globalGrid: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAdminPage = pathname.startsWith("/admin");

  if (isAdminPage) {
    return <main>{children}</main>;
  }

  return (
    <>
      {globalGrid}
      <div className="public-site relative z-[2]">
        <Navbar />

        <main>{children}</main>

        <FooterTransition />
        <Footer />
      </div>
    </>
  );
}