"use client";

import Link from "next/link";
import { FaChevronRight, FaHouse } from "react-icons/fa6";

export default function SpareServiceHero() {
  return (
    <section className="relative h-[450px] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/spare-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-6 lg:px-10">

        <div>

          <h1 className="font-urbanist text-[20px] font-semibold uppercase tracking-wide text-white lg:text-[30px]">
            Spare & Services
          </h1>

          <div className="mt-1 flex items-center gap-3 font-urbanist text-white">

            <Link
              href="/"
              className="flex items-center gap-2 transition hover:text-[#CB6801]"
            >
              <FaHouse className="text-base" />
              Home
            </Link>

            <FaChevronRight className="text-sm text-white/70" />

            <span className="text-white/90">
              Spare & Service
            </span>

          </div>

        </div>

      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-[8px] w-full bg-[#143D7A]" />

    </section>
  );
}