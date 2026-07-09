"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const products = [
  {
    image: "/home/fridges.png",
    title: "Fridge Bottles",
    description:
      "Ideal for producing lightweight, clear, and reusable fridge bottles for everyday household use.",
  },
  {
    image: "/home/packaged.avif",
    title: "Packaged Drinking Water",
    description:
      "Efficient, hygienic, and uniform bottle production tailored for heavy mineral water demand.",
  },
  {
    image: "/home/water-jar.jpeg",
    title: "20 Litre Water Jars ",
    description:
      "Ideal for producing strong, durable 20L PET jars for bulk water supply with uniform wall thickness.",
  },
  {
    image: "/home/drinks.jpg",
    title: "Soft Drinks (CSD)",
    description:
      "Strengthened bottle molding to withstand high internal pressure in carbonated drinks.",
  },
  {
    image: "/home/wide.jpeg",
    title: "Wide-Mouth PET Jars",
    description:
      "Wide-mouth PET jars perfect for easy filling and dispensing of various food products.",
  },
  {
    image: "/home/liquid.png",
    title: "Liquid Detergents",
    description:
      "Optimized for high-precision neck finish in chemical-grade PET container manufacturing.",
  },
  {
    image: "/home/edible-oil.png",
    title: "Edible Oil Bottling",
    description:
      "Designed to handle diverse neck finishes and capacities for oil containers, from 200ml to 2L.",
  },
  {
    image: "/home/baby-feed.jpeg",
    title: "Baby Feeding Bottles",
    description:
      "High-quality PP bottles offering safe, hygienic, heat-resistant, and easy baby feeding use.",
  },
  {
    image: "/home/hot-juice.jpg",
    title: "Hot Fill Juices & Flavored Drinks",
    description:
      "Built with infrared heating and a durable frame, suitable for hot-fill production.",
  },
  {
    image: "/home/heavy-duty.jpeg",
    title: "Heavy-Duty PET Bottles",
    description:
      "Durable, chemical-resistant bottles designed for safe packaging of pesticides and agrochemicals.",
  },
  {
    image: "/home/pharma.png",
    title: "Pharmaceutical Liquids & Syrup Bottles",
    description:
      "Precision blow molding designed to meet pharma-grade cleanliness standards.",
  },
  {
    image: "/home/lubricants.jpeg",
    title: "PET Bottles for Lubricants & Engine Oils",
    description:
      "Strong, leak-proof bottles for automotive oils and lubricants.",
  },
  {
    image: "/home/cosmetics.png",
    title: "Cosmetic & Personal Care Liquids",
    description:
      "Supports tailored PET bottle designs for cosmetic and personal care packaging.",
  },
];

export default function Industry() {
  return (
    <section className="bg-[#f7f7f7] py-12">
      <div className="px-6">
        <h2 className="font-baloo text-center text-[40px] leading-10 font-semibold text-[#334d6e]">
          Versatile PET Bottle Solutions <br />
          <span className="text-center text-[#CB6801]">For Every Industry</span>
        </h2>

        <h3 className="text-center font-baloo text-[40px] font-semibold text-[#CB6801]"></h3>

        <p className="mx-auto mt-4 max-w-3xl text-center font-baloo font-semibold leading-6 text-[#5f6d82]">
          Designed to produce high-quality PET bottles for beverages, water,
          cosmetics, chemicals, and daily-use products with precision and
          efficiency.
        </p>

        <Swiper
          modules={[Autoplay]}
          loop
          centeredSlides
          slidesPerView="auto"
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="industry-swiper mt-10"
        >
          {products.map((item, index) => (
            <SwiperSlide
              key={index}
              className="
    !w-[330px]
    md:!w-[360px]
    xl:!w-[370px]
  "
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                {/* Hover Bottom Line */}

                <span className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 bg-[#CB6801] transition-all duration-500 group-hover:w-full"></span>

                <div className="px-4 py-7">
                  <div className="overflow-hidden rounded-xl">
                    <Image
  src={item.image}
  alt={item.title}
  width={400}
  height={300}
  className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105 [filter:brightness(84%)_contrast(100%)_saturate(100%)_blur(0px)_hue-rotate(0deg)]"
/>
                  </div>

                  <h4 className="mt-8 text-center font-baloo text-[25px] font-semibold text-[#161633]">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-center font-lato text-[17px] leading-7 text-[#6d7685]">
                    {item.description}
                  </p>

                  <div className="mt-5 flex justify-center">
                    <Link
                      href="/products"
                      className="rounded-xl bg-[#CB6801] px-7 py-3 font-urbanist text-sm font-semibold text-white transition hover:bg-[#1A3E73] transition-all duration-300 hover:translate-y-2"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
