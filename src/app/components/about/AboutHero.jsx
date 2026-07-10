"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";

export default function AboutHero() {
  return (
    <section className="relative h-[300px] md:h-[430px] overflow-hidden">

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/about/heros.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#000]/45" />

      {/* Orange Overlay */}

      <div className="absolute inset-0 bg-[#CB6801]/20" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center px-8">

        <div>

          <h1 className="font-urbanist text-[30px] font-bold uppercase text-white">
            About Us
          </h1>

          <div className="mt-2 flex items-center gap-3 font-urbanist text-white">

            <Link
              href="/"
              className="flex items-center gap-2 transition hover:text-[#FFB000]"
            >
              <FaHome />
              Home
            </Link>

            <IoChevronForward />

            <span className="text-white/90">
              About Us
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}