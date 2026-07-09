"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Aayushi",
    image: "/reviews/user.png",
    title: "Innovative and Trustworthy Manufacturer",
    review:
      "Suraj Plastic’s technology and engineering standards are top-notch. Their focus on innovation and quality is evident in every product. We are extremely satisfied with their PET Preform Stretch Blow Moulding Machine.",
  },
  {
    name: "Vishu Thakur",
    image: "/reviews/user.png",
    title: "Value for Money and Professional Support",
    review:
      "Suraj Plastic offers the perfect balance between cost and quality. Their machines deliver high output and low downtime. The company’s professionalism and commitment to customer satisfaction make them a trusted partner in the industry.",
  },
  {
    name: "Aditya Singh",
    image: "/reviews/user.png",
    title: "“Excellent Machine Quality and Performance”",
    review:
      "We’ve been using Suraj Plastic’s PET Blow Moulding Machines for over 3 years now, and their performance is truly outstanding. The machines are durable, efficient, and require minimal maintenance. Highly recommended for industrial-scale production.",
  },
  {
    name: "Tannu",
    image: "/reviews/user.png",
    title: "Reliable Company with Great After-Sales Support",
    review:
      "The best thing about Suraj Plastic Industries is their after-sales service. Whenever we need technical assistance, their team responds immediately. Their machines are well-engineered and designed for long-term reliability.",
  },
];

const clients = [
  { image: "/home/client1.jpeg", alt: "Client 1" },
  { image: "/home/client2.png", alt: "Client 2" },
  { image: "/home/client3.png", alt: "Client 3" },
  { image: "/home/client4.png", alt: "Client 4" },
  { image: "/home/client5.png", alt: "Client 5" },
  { image: "/home/client6.png", alt: "Client 6" },
  { image: "/home/client7.png", alt: "Client 7" },
  { image: "/home/client8.png", alt: "Client 8" },
  { image: "/home/client9.png", alt: "Client 9" },
  { image: "/home/client10.jpg", alt: "Client 10" },
  { image: "/home/client11.png", alt: "Client 11" },
  { image: "/home/client12.png", alt: "Client 12" },
  { image: "/home/client13.png", alt: "Client 13" },
  { image: "/home/client14.gif", alt: "Client 14" },
  { image: "/home/client15.png", alt: "Client 15" },
  { image: "/home/client16.png", alt: "Client 16" },
  { image: "/home/client17.jpg", alt: "Client 17" },
  { image: "/home/client18.png", alt: "Client 18" },
];


export default function Reviews() {
  return (
    <>
      <section className="relative overflow-hidden py-12 bg-black">
        {/* Background Image */}
        <Image
          src="/home/map-bg.png"
          alt="Map Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 -z-10 bg-black/70" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-3 lg:px-14">
          <h2 className="text-center text-white font-baloo text-[42px] font-semibold">
            Reviews
          </h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={25}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            className="mt-12 reviewSwiper"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-[25px] border border-white/60 bg-transparent p-7 h-[350px] md:h-[380px] lg:h-[330px]">
                  <p className="text-xl text-[#FFC107]">"</p>

                  <h3 className="mt-2 text-white font-baloo text-[18px]">
                    {item.name}
                  </h3>

                  <div className="flex gap-1 mt-3 text-[#FFC107]">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <h4 className="mt-4 text-white font-urbanist font-semibold text-[15px]">
                    "{item.title}"
                  </h4>

                  <p className=" text-white/90 leading-7 font-urbanist text-[15px]">
                    {item.review}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className=" mx-auto px-3 md:px-16">
          <h2 className="text-center font-baloo text-[40px] font-bold ">
            Our Clients
          </h2>

          <Swiper
            modules={[Autoplay]}
            loop
            speed={700}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={18}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
              1400: {
                slidesPerView: 6,
              },
            }}
            className="mt-7"
          >
            {clients.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group flex h-[140px] items-center justify-center rounded-3xl border border-[#D9D9D9] bg-white px-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#CB6801] hover:shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={220}
                    height={120}
                    className="max-h-[80px] w-auto object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
