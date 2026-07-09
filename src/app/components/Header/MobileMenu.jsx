"use client";

import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default function MobileMenu({ open, setOpen, menus }) {
  return (
    <div
      className={`fixed inset-0 bg-black/50 z-50 transition-all ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`absolute right-0 top-0 h-full w-[280px] bg-white transition-all duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b">

          <h2 className="font-bold text-xl">Menu</h2>

          <button onClick={() => setOpen(false)}>
            <IoClose size={30} />
          </button>

        </div>

        <div className="flex flex-col">

          {menus.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-5 py-4 border-b hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact-us"
            className="m-5 bg-[#1A3E73] text-white text-center py-3 rounded"
          >
            GET A QUOTE
          </Link>

        </div>
      </div>
    </div>
  );
}