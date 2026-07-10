"use client";

import { useState } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";

export default function MobileMenu({ open, setOpen, menus }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div
      className={`lg:hidden fixed inset-0 z-[999] bg-black/50 transition-all ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`absolute right-0 top-0 h-full w-[280px] bg-white transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-bold">Menu</h2>

          <button onClick={() => setOpen(false)}>
            <IoClose size={30} />
          </button>
        </div>

        {menus.map((item) => (
          <div key={item.name}>
            {item.dropdown ? (
              <>
                <div className="flex items-center border-b">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex-1 px-5 py-4 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.name ? null : item.name,
                      )
                    }
                    className="flex h-[56px] w-[56px] items-center justify-center border-l hover:bg-gray-100"
                  >
                    <FaChevronDown
                      className={`transition duration-300 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {openDropdown === item.name && (
                  <div className="bg-gray-50">
                    {item.items.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        onClick={() => setOpen(false)}
                        className="block border-b px-8 py-3 text-sm hover:bg-[#1A3E73] hover:text-white"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b px-5 py-4 hover:bg-gray-100"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}

        <Link
          href="/contact-us"
          onClick={() => setOpen(false)}
          className="m-5 block rounded bg-[#1A3E73] py-3 text-center text-white"
        >
          GET A QUOTE
        </Link>
      </div>
    </div>
  );
}
