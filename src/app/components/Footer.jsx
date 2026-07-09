import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiFacebookCircleFill } from "react-icons/ri";

const quickLinks = [
  { title: "HOME", href: "/" },
  { title: "ABOUT US", href: "/about-us" },
  { title: "PRODUCTS", href: "/products" },
  { title: "CAREER", href: "/career" },
  { title: "CONTACT US", href: "/contact-us" },
];

const products = [
  {
    title: "Semi Automatic Stretch Blow Moulding Machine",
    href: "/products/semi-automatic-stretch-blow-moulding-machine",
  },
  {
    title: "High Speed Semi Automatic Stretch Blow Moulding Machine",
    href: "/products/high-speed-pet-perform-stretch-blow-moulding-machine",
  },
  {
    title: "Automatic Hand Feed Blow Moulding Machine",
    href: "/products/automatic-hand-feed-pet-perform-stretch-blow-moulding-machine",
  },
  {
    title: "Fully Automatic Stretch Blow Moulding Machine",
    href: "/products/fully-automatic-stretch-blow-moulding-machine",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#23457B] text-white">
      <div className="mx-auto max-w-[1600px] px-14 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr_1fr_1.2fr]">
          {/* Left */}

          <div>
            <Image
              src="/footer-logo.png"
              alt="Suraj Plastic"
              width={170}
              height={80}
            />

            <p className="mt-6 font-urbanist leading-7 text-white/95">
              As an ISO 9001-2015 certified company we are synonymous with
              innovation and expertise.
              We were established in the year 1982 as a manufacturer of Blow /
              Injection Moulding Articles. We have made our mark as a modern,
              versatile and creative manufacturer of PET Preform Stretch
              Blow-moulding machine since 1997.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="font-urbanist text-[25px] font-semibold uppercase">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 font-urbanist transition hover:text-[#FF9800]"
                  >
                    <FaArrowRightLong className="text-[#FF9800] transition group-hover:translate-x-1" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}

          <div>
            <h3 className="font-urbanist text-[25px] font-semibold uppercase">
              Products
            </h3>

            <ul className="mt-6 space-y-3">
              {products.map((item) => (
                <li
                  key={item.href}
                  className="flex items-center gap-3 font-urbanist"
                >
                  <FaArrowRightLong className="mt-2 shrink-0 text-[#FF9800]" />

                  <Link
                    href={item.href}
                    className="transition duration-300 hover:text-[#FF9800]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="font-urbanist text-[25px] font-semibold uppercase">
              Contact Us
            </h3>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="mt-1 text-2xl text-[#FF9800]" />

                <div className="font-urbanist flex gap-2">
                 <a href="tel:919871494249"> +91 9871494249</a>, <a href="tel:919999886068">+91 9999886068</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IoMail className="mt-1 text-[28px] text-[#FF9800]" />

                <a href="mailto:info@surajplasticindustries.com" className="font-urbanist">
                  info@surajplasticindustries.com
                </a>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-2xl text-[#FF9800]" />

                <p className="font-urbanis">
                  D-18, Naresh Park Extension,
                  Nangloi,
                  New Delhi - 110041
                </p>
              </div>

              <div className="flex gap-2 pt-2">
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded bg-[#3b5998] text-xl transition hover:scale-110"
                >
                  <RiFacebookCircleFill />
                </Link>

                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded bg-[#1DA1F2] text-xl transition hover:scale-110"
                >
                  <FaTwitter />
                </Link>

                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded bg-[#FF0000] text-xl transition hover:scale-110"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}

      <div className="border-t border-white/10 bg-[#1E3F72] py-5">
        <p className="text-center font-urbanist text-white">
          Copyright © 2025 SURAJ PLASTIC INDUSTRIES All Right Reserved | Powered by{" "}
          <Link href="https://www.cybertricksmedia.com/" target="_blank"><span className="font-semibold text-[#FF9800]">Bharat Bizmart</span></Link>
        </p>
      </div>
    </footer>
  );
}
