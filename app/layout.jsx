import { Bricolage_Grotesque, Caveat, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./site.css";
import "./pages.css";
import SiteShell from "@/components/site/SiteShell";
import Navbar from "@/components/site/chrome/Navbar";
import Footer from "@/components/site/chrome/Footer";
import FloatingActions from "@/components/site/chrome/FloatingActions";
import Curtain from "@/components/site/chrome/Curtain";
import Motion from "@/components/site/Motion";
import JsonLd from "@/components/site/JsonLd";
import { DEFAULT_OG_IMAGE, SITE_URL, organizationLd, websiteLd } from "@/lib/site-seo";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const label = JetBrains_Mono({ subsets: ["latin"], variable: "--font-label", display: "swap" });
const hand = Caveat({ subsets: ["latin"], variable: "--font-hand", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Applotie Technologies | Web Development & Digital Marketing Agency in Patna",
    template: "%s | Applotie",
  },
  description:
    "Applotie is a web development company and digital marketing agency in Patna, Bihar. Websites, apps, SEO, performance marketing, reputation management and branding that bring in customers.",
  applicationName: "Applotie",
  openGraph: {
    type: "website",
    siteName: "Applotie Technologies",
    locale: "en_IN",
    url: SITE_URL,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/brand/applotie-app-icon.svg" },
};

export const viewport = {
  themeColor: "#ff2d2d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${label.variable} ${hand.variable}`}>
      <body>
        <JsonLd data={organizationLd()} />
        <JsonLd data={websiteLd()} />
        <SiteShell
          curtain={<Curtain />}
          nav={<Navbar />}
          footer={<Footer />}
          floating={<FloatingActions />}
          motion={<Motion />}
        >
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
