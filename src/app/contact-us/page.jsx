"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import {
  FaEnvelope,
  FaHouse,
  FaLocationDot,
  FaPhoneVolume,
} from "react-icons/fa6";


const ACCESS_KEY_1 = "e518a8fe-9f04-48c0-9134-165b943a63e6";
const ACCESS_KEY_2 = "d0db7e79-9031-4fa6-95a4-8665a1d3c0ec";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/; // exactly 10 digits, koi bhi start digit

export default function ContactPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const validateRequired = (value, label) =>
    !value.trim() ? `${label} is required` : "";

  const validateEmail = (value) => {
    if (!value.trim()) return "Email is required";
    if (!EMAIL_REGEX.test(value.trim()))
      return "Enter a valid email address (e.g. name@example.com)";
    return "";
  };

  const validatePhone = (value) => {
    const digitsOnly = value.replace(/\D/g, "");
    if (!digitsOnly) return "Phone number is required";
    if (digitsOnly.length !== 10)
      return "Phone number must be exactly 10 digits";
    if (!PHONE_REGEX.test(digitsOnly))
      return "Enter a valid 10-digit phone number";
    return "";
  };

  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    e.target.value = digitsOnly;
    setFieldErrors((prev) => ({ ...prev, phone: "" }));
  };

  const clearFieldError = (field) => {
    setFieldErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;

    // 🤖 Honeypot bot-check
    if (form.botcheck.checked) {
      form.reset();
      return;
    }

    const firstNameValue = form.firstName.value;
    const lastNameValue = form.lastName.value;
    const emailValue = form.email.value.trim();
    const phoneValue = form.phone.value.trim();

    const firstNameError = validateRequired(firstNameValue, "First name");
    const lastNameError = validateRequired(lastNameValue, "Last name");
    const emailError = validateEmail(emailValue);
    const phoneError = validatePhone(phoneValue);

    if (firstNameError || lastNameError || emailError || phoneError) {
      setFieldErrors({
        firstName: firstNameError,
        lastName: lastNameError,
        email: emailError,
        phone: phoneError,
      });
      setError("Please fix the highlighted fields below.");
      return;
    }

    setLoading(true);

    const formData = {
      name: `${firstNameValue} ${lastNameValue}`.trim(),
      email: emailValue,
      phone: phoneValue,
      message: form.message.value,
      subject: "New Inquiry - Suraj Plastic Industries",
      from_name: "Suraj Plastic Industries Website",
    };

    try {
      const submitToWeb3Forms = (accessKey) =>
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            ...formData,
          }),
        }).then((res) => res.json());

      const results = await Promise.allSettled([
        submitToWeb3Forms(ACCESS_KEY_1),
        submitToWeb3Forms(ACCESS_KEY_2),
      ]);

      const atLeastOneSuccess = results.some(
        (r) => r.status === "fulfilled" && r.value.success,
      );

      if (atLeastOneSuccess) {
        form.reset();
        router.push("/thank-you");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

              <span className="text-white/90">Contact Us</span>
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
            From quick assistance to complete custom solutions, share your
            details and our experts will provide the right support for you.
          </p>

          {/* Top Cards */}

          <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3 px-5 lg:px-28">
            {/* Address */}

            <div className="rounded-[30px] bg-[#A6B4CB] px-8 py-7 text-center text-white transition duration-500 hover:-translate-y-2 hover:bg-[#214B89]">
              <h3 className="font-baloo text-[35px] font-semibold">Address</h3>

              <p className=" font-baloo text-[17px] font-semibold">
                D-18, Naresh Park Extension, Nangloi, New Delhi - 110041
              </p>
              <div className="flex justify-center mt-5">
                <Image src="/address-3.png" width={100} height={100} />
              </div>
            </div>

            {/* Phone */}

            <div className="rounded-[30px] bg-[#A6B4CB] px-8 py-7 text-center text-white transition duration-500 hover:-translate-y-2 hover:bg-[#214B89]">
              <h3 className="font-baloo text-[35px] font-semibold">Phone</h3>

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
              <h3 className="font-baloo text-[35px] font-semibold">Email</h3>

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
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      onChange={() => clearFieldError("firstName")}
                      className={`h-12 w-full rounded-2xl bg-white px-6 font-urbanist outline-none transition focus:ring-2 focus:ring-[#214B89] ${
                        fieldErrors.firstName ? "ring-2 ring-red-500" : ""
                      }`}
                    />
                    {fieldErrors.firstName && (
                      <p className="mt-1.5 text-sm font-urbanist font-semibold text-red-100">
                        {fieldErrors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      onChange={() => clearFieldError("lastName")}
                      className={`h-12 w-full rounded-2xl bg-white px-6 font-urbanist outline-none transition focus:ring-2 focus:ring-[#214B89] ${
                        fieldErrors.lastName ? "ring-2 ring-red-500" : ""
                      }`}
                    />
                    {fieldErrors.lastName && (
                      <p className="mt-1.5 text-sm font-urbanist font-semibold text-red-100">
                        {fieldErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    onChange={() => clearFieldError("email")}
                    className={`h-12 w-full rounded-2xl bg-white px-6 font-urbanist outline-none transition focus:ring-2 focus:ring-[#214B89] ${
                      fieldErrors.email ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="mt-1.5 text-sm font-urbanist font-semibold text-red-100">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Your Phone Number"
                    onChange={handlePhoneChange}
                    className={`h-12 w-full rounded-2xl bg-white px-6 font-urbanist outline-none transition focus:ring-2 focus:ring-[#214B89] ${
                      fieldErrors.phone ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {fieldErrors.phone && (
                    <p className="mt-1.5 text-sm font-urbanist font-semibold text-red-100">
                      {fieldErrors.phone}
                    </p>
                  )}
                </div>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full resize-none rounded-2xl bg-white p-6 font-urbanist outline-none transition focus:ring-2 focus:ring-[#214B89]"
                />

                {/* Honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {error && (
                  <p className="font-urbanist text-sm font-semibold text-red-100">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full rounded-2xl bg-[#214B89] font-urbanist text-[20px] font-semibold text-white transition-all duration-300 hover:bg-[#CB6801] disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
