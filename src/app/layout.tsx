import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bizpluserp.com"),
  title: {
    default: "BizPlusERP | Manufacturing ERP Solutions",
    template: "%s | BizPlusERP",
  },
  description:
    "BizPlusERP provides cloud-based manufacturing ERP solutions for Indian businesses including production tracking, inventory management, BOM control and accounting systems.",
  openGraph: {
    siteName: "BizPlusERP",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BizPlusERP",
              url: "https://bizpluserp.com",
              logo: "https://bizpluserp.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-7030323838",
                contactType: "customer support",
                areaServed: "IN",
                availableLanguage: "English",
              },
              sameAs: [
                "https://facebook.com/yourpage",
                "https://linkedin.com/company/yourcompany",
                "https://instagram.com/yourprofile",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}