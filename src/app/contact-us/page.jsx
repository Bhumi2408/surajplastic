"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import {
    FaEnvelope,
    FaHouse,
    FaLocationDot,
    FaPhoneVolume,
} from "react-icons/fa6";


export default function ContactPage() {
    return (
        <>
            <section className="relative h-[450px] overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/contact-banner.webp')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Content */}
                <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-6 lg:px-10">

                    <div>

                        <h1 className="font-urbanist text-[20px] font-semibold uppercase tracking-wide text-white lg:text-[30px]">
                            Contact Us
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
                                Contact Us
                            </span>

                        </div>

                    </div>

                </div>

                {/* Bottom Border */}
                <div className="absolute left-0 h-[8px] w-full bg-[#143D7A]" />

            </section>
            <section className="bg-white py-20">
                <div className="mx-auto max-w-[1400px] px-6">

                    {/* Heading */}

                    <h2 className="text-center font-urbanist text-[32px] font-bold leading-tight lg:text-[50px]">
                        We're Here to Solve{" "}
                        <span className="text-[#214B89]">Your Needs</span>
                    </h2>

                    <p className="mx-auto mt-2 max-w-5xl text-center font-urbanist">
                        From quick assistance to complete custom solutions, share your details
                        and our experts will provide the right support for you.
                    </p>

                    {/* Top Cards */}

                    <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3 px-5 lg:px-28">

                        {/* Address */}

                        <div className="rounded-[30px] bg-[#A6B4CB] px-8 py-7 text-center text-white transition duration-500 hover:-translate-y-2 hover:bg-[#214B89]">



                            <h3 className="font-baloo text-[35px] font-semibold">
                                Address
                            </h3>

                            <p className=" font-baloo text-[17px] font-semibold">
                                D-18, Naresh Park Extension,

                                Nangloi,

                                New Delhi - 110041
                            </p>
                            <div className="flex justify-center mt-5">
                                <Image src="/address-3.png" width={100} height={100} />
                            </div>

                        </div>

                        {/* Phone */}

                        <div className="rounded-[30px] bg-[#A6B4CB] px-8 py-7 text-center text-white transition duration-500 hover:-translate-y-2 hover:bg-[#214B89]">


                            <h3 className="font-baloo text-[35px] font-semibold">
                                Phone
                            </h3>

                            <p className="font-baloo text-[17px] font-semibold">
                                +91 9871494249
                                <br />
                                +91 9999886068
                            </p>
                            <div className="flex justify-center mt-5">
                                <Image src="/touch-1.png" width={100} height={100} />
                            </div>

                        </div>

                        {/* Email */}

                        <div className="rounded-[30px] bg-[#A6B4CB] px-8 py-7 text-center text-white transition duration-500 hover:-translate-y-2 hover:bg-[#214B89]">



                            <h3 className="font-baloo text-[35px] font-semibold">
                                Email
                            </h3>

                            <p className="font-baloo text-[17px] font-semibold">
                                info@surajplasticindustries.com
                            </p>
                            <div className="flex justify-center mt-7">
                                <Image src="/email.png" width={100} height={100} />
                            </div>

                        </div>

                    </div>

                    {/* Map + Form */}

                    <div className="mt-20 grid gap-5 lg:grid-cols-2 px-5 lg:px-28">

                        {/* Map */}

                        <div className="overflow-hidden rounded-[30px] shadow-lg">


                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.514432368!2d77.05938987529072!3d28.674254275641932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029cffffffff%3A0xa87bf9292c29f36a!2sSuraj%20Plastic%20Industries!5e0!3m2!1sen!2sin!4v1783494496670!5m2!1sen!2sin"
                                width="100%"
                                height="500"
                                loading="lazy"
                                className="border-0"
                            />

                        </div>

                        {/* Contact Form */}

                        <div className="rounded-[30px] bg-[#A6B4CB] p-10 shadow-lg">

                            <form className="space-y-4">

                                <div className="grid gap-5 md:grid-cols-2">

                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="h-12 rounded-2xl bg-white px-6 font-urbanist outline-none transition focus:ring-2 focus:ring-[#214B89]"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="h-12 rounded-2xl bg-white px-6 font-urbanist outline-none transition focus:ring-2 focus:ring-[#214B89]"
                                    />

                                </div>

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="h-12 w-full rounded-2xl bg-white px-6 font-urbanist outline-none transition focus:ring-2 focus:ring-[#214B89]"
                                />

                                <input
                                    type="tel"
                                    placeholder="Your Phone Number"
                                    className="h-12 w-full rounded-2xl bg-white px-6 font-urbanist outline-none transition focus:ring-2 focus:ring-[#214B89]"
                                />

                                <textarea
                                    rows={4}
                                    placeholder="Your Message"
                                    className="w-full resize-none rounded-2xl bg-white p-6 font-urbanist outline-none transition focus:ring-2 focus:ring-[#214B89]"
                                />

                                <button
                                    type="submit"
                                    className="h-12 w-full rounded-2xl bg-[#214B89] font-urbanist text-[20px] font-semibold text-white transition-all duration-300 hover:bg-[#CB6801]"
                                >
                                    Submit
                                </button>

                            </form>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}