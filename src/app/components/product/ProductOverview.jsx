"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function ProductOverview({ product }) {
  return (
    <section className="bg-white pt-20 pb-10 px-5 lg:px-20">
      <div className="mx-auto grid max-w-[1600px] gap-16 items-center px-6 lg:grid-cols-2">
        {/* IMAGE */}

        <div>
          <div className="group rounded-3xl border bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <Image
              src={product.image}
              alt={product.name}
              width={350}
              height={350}
              className="mx-auto transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* CONTENT */}

        <div>
          <h1 className="mt-5 font-baloo text-3xl font-semibold leading-tight text-[#13233B]">
            {product.name}
          </h1>

          <div className="mt-2 space-y-3">
            {Array.isArray(product.shortDescription) ? (
              product.shortDescription.map((para, index) => (
                <p key={index} className="leading-8 text-[17px] text-gray-600">
                  {para}
                </p>
              ))
            ) : (
              <p className="leading-8 text-[17px] text-gray-600">
                {product.shortDescription}
              </p>
            )}
          </div>

          <div className="mt-5 grid gap-3">
            {product.features.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 text-xl text-[#D97706]" />

                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-5">
            <Link
              href="/contact-us"
              className="rounded-full border border-[#13233B] px-10 py-4 font-semibold text-[#13233B] transition hover:bg-[#13233B] hover:text-white"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
