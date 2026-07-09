"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const menus = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about-us" },
  {
    name: "PRODUCTS",
    href: "/products",
    dropdown: true,
    items: [
      {
        name: "Pet Perform Stretch Blow Moulding Machine",
        href: "/semi-automatic-stretch-blow-moulding-machine",
      },
      {
        name: "High Speed Pet Perform Stretch Blow Moulding Machine",
        href: "/high-speed-pet-perform-stretch-blow-moulding-machine",
      },
      {
        name: "Auto Drop Pet Perform Stretch Blow Moulding Machine",
        href: "/auto-drop-pet-perform-stretch-blow-moulding-machine",
      },
      {
        name: "Automatic Hand Feed Pet Perform Stretch Blow Moulding Machine",
        href: "/automatic-hand-feed-pet-perform-stretch-blow-moulding-machine",
      },
      {
        name: "Fully Automatic Pet Perform Stretch Blow Moulding Machine",
        href: "/fully-automatic-stretch-blow-moulding-machine",
      },
    ],
  },
  { name: "SPARE & SERVICE", href: "/spare-service" },
  { name: "CAREER", href: "/career" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT US", href: "/contact-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="bg-white">
        <div className="mx-auto px-10 h-[80px] flex justify-between items-center">

          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={160}
              height={70}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">

            {menus.map((item) => {
              const active =
                pathname === item.href ||
                (item.dropdown && pathname.startsWith("/products"));

              return (
                <div key={item.name} className="relative group">

                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-2 font-semibold text-[15px] tracking-wide transition-all duration-300 ${
                      active
                        ? "text-[#1A3E73]"
                        : "text-[#6B6B6B] hover:text-[#1A3E73]"
                    }`}
                  >
                    {item.name}

                    {item.dropdown && (
                      <FaChevronDown className="text-[11px] transition-transform duration-300 group-hover:rotate-180" />
                    )}

                    <span
                      className={`absolute -bottom-[8px] left-0 h-[3px] bg-[#1A3E73] transition-all duration-300 ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                  {item.dropdown && (
                    <div className="absolute left-0 top-full pt-7 invisible opacity-0 translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50">

                      <div className="w-[280px] bg-[#1A3E73] shadow-xl">

                        {item.items.map((product) => (
                          <Link
                            key={product.name}
                            href={product.href}
                            className="block px-6 py-5 font-medium text-white border-b border-white/10 hover:bg-[#CB6801] transition"
                          >
                            {product.name}
                          </Link>
                        ))}

                      </div>

                    </div>
                  )}
                </div>
              );
            })}

          </div>

          <Link
            href="/contact-us"
            className="hidden lg:flex bg-[#1A3E73] hover:bg-[#CB6801] transition text-sm text-white px-6 py-3 rounded"
          >
            GET A QUOTE
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-4xl text-[#1A3E73]"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </nav>

      <MobileMenu open={open} setOpen={setOpen} menus={menus} />
    </>
  );
}