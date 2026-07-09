import {
  Baloo_2,
  Urbanist,
  Lato,
  Montserrat,
} from "next/font/google";

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

  title: "Suraj Plastic Industries | Best Blow Moulding Machines Manufacturer",

  description:
    "Suraj Plastic Industries is a trusted Blow Moulding Machines Manufacturer, offering high-performance, energy-efficient plastic blow moulding machines with reliable quality and excellent after-sales support.",

  keywords: [
    "Suraj Plastic Industries",
  ],


  icons: {
    icon: "/favicons.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${baloo2.variable} ${urbanist.variable} ${lato.variable} ${montserrat.variable}`}
    >
      <body className="font-lato overflow-x-hidden">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}