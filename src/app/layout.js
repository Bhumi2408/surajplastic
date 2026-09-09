import {
  Baloo_2,
  Urbanist,
  Lato,
  Montserrat,
} from "next/font/google";

import Script from "next/script";

import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo2",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});



export const metadata = {
  metadataBase: new URL("https://www.surajplasticindustries.com/"),

  title: "Suraj Plastic Industries | Best Blow Moulding Machines Manufacturer",

  description:
    "Suraj Plastic Industries is a trusted Blow Moulding Machines Manufacturer, offering high-performance, energy-efficient plastic blow moulding machines with reliable quality and excellent after-sales support.",

  keywords: [
    "Suraj Plastic Industries",
  ],

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicons.png",
  },

  verification: {
    google: "lK-R5xHFnjXdAG3dHXS8A5ftpLkvPyyMZ9bbhzXVLwg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Suraj Plastic Industries",
  url: "https://www.surajplasticindustries.com",
  logo: "https://www.surajplasticindustries.com/logo.png",
  foundingDate: "1982",
  description:
    "Suraj Plastic Industries is a trusted Blow Moulding Machines Manufacturer, offering high-performance, energy-efficient PET stretch blow moulding machines since 1997.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-18, Naresh Park Extension, Nangloi",
    addressLocality: "New Delhi",
    postalCode: "110041",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9871494249",
      contactType: "sales",
      email: "info@surajplasticindustries.com",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${baloo2.variable} ${urbanist.variable} ${lato.variable} ${montserrat.variable}`}
    >
      <body className="font-lato overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W96ZKH82SN"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W96ZKH82SN');
          `}
        </Script>

        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}