"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Hero({
  title,
  image,
}) {
  return (
    <section className="relative h-[350px] overflow-hidden">

      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 flex h-full items-center">

        <div className="mx-auto w-full max-w-[1300px] px-6">

          <h1 className="max-w-[900px] font-baloo text-4xl font-semibold text-white">
            {title}
          </h1>

          <div className="mt-3 flex items-center gap-3 text-white">

            <FaHome />

            <Link
              href="/"
              className="transition hover:text-[#D97706]"
            >
              Home
            </Link>

            <span>›</span>

            <Link
              href="/products"
              className="transition hover:text-[#D97706]"
            >
              Products
            </Link>

            <span>›</span>

            <span className="text-[#D97706]">
              {title}
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}