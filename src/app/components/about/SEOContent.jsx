"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaCapsules,
  FaCheckCircle,
  FaFlask,
  FaHotel,
  FaOilCan,
  FaPumpSoap,
  FaTruck,
} from "react-icons/fa";
import {
  FaIndustry,
  FaClock,
  FaBottleWater,
  FaBoxesPacking,
  FaGaugeHigh,
  FaArrowTrendUp,
  FaRobot,
  FaShieldHeart,
  FaComments,
  FaHeadset,
  FaFlag,
  FaPlus,
  FaMinus,
  FaArrowRightLong,
  FaPhoneVolume,
} from "react-icons/fa6";

const features = [
  {
    icon: <FaIndustry size={30} />,
    title: "1480+ Satisfied Installations Across India and Abroad",
    description:
      "From small startup water plants to large-scale packaged drinking water brands — our machines are running across India and beyond. Every installation is a relationship, not just a sale.",
  },
  {
    icon: <FaClock size={30} />,
    title: "Machines That Run 24 Hours Non-Stop",
    description:
      "Our machines are built for continuous industrial use. Robust design, quality components, and a hydro-pneumatic operation system that is smooth, reliable, and low-maintenance — even in the toughest production environments.",
  },
  {
    icon: <FaBottleWater size={30} />,
    title: "Up to 9600 Bottles Per Hour",
    description:
      "Our machine range covers production capacities from 150 BPH (for large 25-litre jars) to 700 BPH per machine. With multiple machines running together, plants achieve up to 9600 bottles per hour — suitable for the largest water bottling operations.",
  },
  {
    icon: <FaBoxesPacking size={30} />,
    title: "Bottle Sizes from 50 ML to 25 LTR",
    description:
      "Whether you are producing small 200 ML mineral water bottles for hotels and airlines, standard 1-litre packaged drinking water, 5-litre or 20-litre office dispensers, or large 25-litre industrial jars — we have the right machine for you.",
  },
];

const machines = [
  {
    icon: <FaIndustry size={30} />,
    title: "Semi Automatic Stretch Blow Moulding Machine",
    description:
      "Best for new water plants and small-to-mid scale production. Output up to 700 BPH. Bottle sizes 50 ML to 25 LTR. Requires only 2 operators. Compact 5×5 MTR footprint.",
  },
  {
    icon: <FaGaugeHigh size={30} />,
    title: "High Speed Semi Automatic Stretch Blow Moulding Machine",
    description:
      " Faster cycle times for growing water plants that need more output without full automation.",
  },
  {
    icon: <FaArrowTrendUp size={30} />,
    title: "Automatic Hand Feed Stretch Blow Moulding Machine",
    description:
      "Semi-automatic preform feeding with fully automatic blowing — a smart step up for scaling production.",
  },
  {
    icon: <FaRobot size={30} />,
    title: "Fully Automatic Stretch Blow Moulding Machine",
    description:
      "Zero manual steps. Designed for large-scale, continuous water bottle production. Maximum output, minimum labour cost per bottle.",
  },
];

const waterplants = [
  {
    title: "Food-Safe PET Bottle Output",
    description:
      "Our machines produce bottles that are food-safe, hygienic, and suitable for BIS-licensed packaged drinking water plants. Crystal-clear transparency, uniform wall thickness, and consistent neck dimensions for perfect capping.",
  },
  {
    title: "Multiple Bottle Sizes on One Machine",
    description:
      "With a mould change, the same machine can produce different bottle sizes — from 200 ML mineral water bottles to 20-litre dispensers. Maximum flexibility for your production line.",
  },
  {
    title: "Low Operating Cost",
    description:
      "Energy-efficient heaters, hydro-pneumatic operation, and minimal maintenance needs keep your per-bottle production cost low — important in the competitive water bottling business.",
  },
  {
    title: "Easy to Train Operators",
    description:
      "Our machines are designed for simplicity. Two operators can run the machine effectively after basic training. No complex controls, no unnecessary complications.",
  },
  {
    title: "Durable for Continuous Production",
    description:
      "Mineral water plants run long shifts. Our machines are built to run 24 hours non-stop without performance drop — exactly what a water bottling plant needs.",
  },
];

const industries = [
  {
    icon: <FaBottleWater />,
    title: "Packaged Drinking Water Plants ",
    description: " BIS licensed, producing 200 ML to 20 LTR bottles",
  },
  {
    icon: <FaIndustry />,
    title: "Mineral Water Brands",
    description: "private label and branded water bottlers",
  },
  {
    icon: <FaFlask />,
    title: "Beverage and Juice Manufacturers",
    description: "fruit juice, energy drinks, flavoured water",
  },
  {
    icon: <FaHotel />,
    title: "Hotels, Resorts and Hospitals",
    description: "private label mineral water production",
  },
  {
    icon: <FaTruck />,
    title: "FMCG Companies",
    description: "water, juice, and beverage packaging",
  },
  {
    icon: <FaCapsules />,
    title: "Pharmaceutical Units",
    description: "liquid medicine and syrup bottles",
  },
  {
    icon: <FaOilCan />,
    title: "Edible Oil and Food Processing",
    description: "oil, sauce, and condiment bottles",
  },
  {
    icon: <FaPumpSoap />,
    title: "Cosmetics and Personal Care",
    description: "shampoo, lotion, and personal care bottles",
  },
  {
    icon: <FaBoxesPacking />,
    title: "Industrial Packaging",
    description: "large jars and containers from 5 LTR to 25 LTR",
  },
];

const values = [
  {
    icon: <FaShieldHeart />,
    title: "Reliability Over Promises",
    description:
      "We have been in this business for over 40 years. We know that a machine breakdown at 2 AM costs you more than the repair — it costs you production, orders, and trust. That is why we build machines that do not break down easily, and why we support you when they do.",
  },
  {
    icon: <FaComments />,
    title: "Honest, Direct Communication",
    description:
      "We will not oversell you. If a smaller machine fits your production target, we will tell you. If you need a bigger one to grow, we will explain why. Our goal is a machine that works for your business — not the most expensive machine we can sell.",
  },
  {
    icon: <FaHeadset />,
    title: "After-Sales Support That Is Actually There",
    description:
      "Our relationship does not end at installation. We stock spare parts for all our models, our team answers calls, and we dispatch service engineers when on-site support is needed.",
  },
  {
    icon: <FaFlag />,
    title: "Manufactured in India, for Indian Conditions",
    description:
      "Our machines are designed and tested for Indian manufacturing environments — voltage variations, dust, humidity, and long production hours. They are built tough because Indian production is tough.",
  },
];

const faqs = [
  {
    question: "What does Suraj Plastic Industries manufacture? ",
    answer:
      "We manufacture PET preform stretch blow moulding machines — used to produce mineral water bottles, packaged drinking water containers, juice bottles, cosmetic containers, edible oil bottles, and a wide range of PET packaging from 50 ML to 25 LTR.",
  },
  {
    question: "How long has Suraj Plastic Industries been in business? ",
    answer:
      "We were founded in 1982 — over 40 years in plastics manufacturing. We have been specifically manufacturing water bottle making machines (PET stretch blow moulding machines) since 1997.",
  },
  {
    question: "How many machines have you installed? ",
    answer:
      "We have completed 1480+ satisfied installations across India and abroad, with 3000+ machines delivered over our history.",
  },
  {
    question: "Are your machines suitable for a mineral water plant? ",
    answer:
      "Yes. Our machines produce food-safe, BIS-compliant PET bottles ideal for packaged drinking water and mineral water plants — from small 200 ML bottles to large 20-litre and 25-litre dispensers.",
  },
  {
    question: "What certifications does Suraj Plastic Industries hold? ",
    answer:
      "We hold ISO 9001-2015 certification and have been awarded the NSIC Best Technology Award (1999) and ISO 9001-2000 certification by CCAS UK (2002).",
  },
  {
    question: "Where are your machines manufactured? ",
    answer:
      "All our machines are manufactured at our facility in Naresh Park Extension, Nangloi, New Delhi – 110041. We are a direct manufacturer — not a trader or reseller.",
  },
  {
    question: "Do you provide installation and after-sales support? ",
    answer:
      "Yes. We provide on-site installation, commissioning, operator training, and after-sales technical support. Spare parts for all models are stocked and dispatched quickly.",
  },
];

const SEOContent = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <section className="bg-[#f8fafc] py-10">
        <div className="mx-auto max-w-[1500px] px-6">
          {/* Heading */}

          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mt-3 font-baloo text-[18px] font-semibold leading-tight lg:text-[25px]">
              Who We Are Today
            </h2>

            <p className="mt-3 text-[#56657A] font-urbanist">
              We are a <strong>direct manufacturer</strong> — not a trader, not
              a reseller.
            </p>

            <p className="mt-3 text-[#56657A] font-urbanist">
              Every machine is designed, assembled, tested, and dispatched from
              our facility at Naresh Park Extension, Nangloi, New Delhi. When
              you buy from us, you deal directly with the people who built your
              machine. No middlemen. No markup. No passing the blame when
              something needs fixing.
            </p>

            <p className="mt-3 text-[#56657A] font-urbanist">
              Here is what defines us today:
            </p>
          </div>

          {/* Cards */}

          <div className="mt-10 grid gap-5 md:grid-cols-2 px-5 lg:px-20">
            {features.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#E5E7EB] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#CB6801] hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#CB6801] text-white transition duration-300 group-hover:bg-[#14345D]">
                  {item.icon}
                </div>

                <h3 className="mt-4 font-baloo text-[18px] font-semibold leading-8 text-[#14345D]">
                  {item.title}
                </h3>

                <p className="mt-2 font-urbanist text-[#5A6474]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-[1500px] px-5 md:px-20">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mt-3 font-baloo text-[25px] font-semibold lg:text-[30px]">
              Our Machine Range
            </h2>

            <p className="mx-auto mt-3 max-w-4xl font-urbanist text-[#5A6474]">
              As a leading{" "}
              <a href="/" className="text-[#2D6BFF] font-semibold">
                mineral water bottle making machine manufacturer in Delhi
              </a>
              , we offer a complete range of PET stretch blow moulding machines
              to suit every scale of water bottle production:
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {machines.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#CB6801] hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#CB6801] text-white transition duration-300 group-hover:bg-[#14345D]">
                  {item.icon}
                </div>

                <h3 className="mt-4 font-baloo text-lg font-semibold text-[#14345D]">
                  {item.title}
                </h3>

                <p className="mt-2 font-urbanist text-[#5A6474]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F8FAFC] py-10">
        <div className="mx-auto max-w-[1500px] px-5 md:px-20">
          <div>
            {/* LEFT */}

            <div>
              <h2 className="mt-3 font-baloo text-[30px] font-semibold leading-tight">
                What Makes Our Machines Right for Mineral Water Plants?
              </h2>

              <p className="mt-5 font-urbanist text-[#5A6474]">
                Buyers setting up a packaged drinking water (PDW) or mineral
                water plant have specific needs. Here is how our machines meet
                them:
              </p>
            </div>

            {/* RIGHT */}

            <div className="space-y-5 mt-10">
              {waterplants.map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="mt-1 text-[24px] text-[#CB6801]">
                    <FaCheckCircle />
                  </div>

                  <div>
                    <h3 className="font-baloo text-[20px] text-[#14345D]">
                      {item.title}
                    </h3>

                    <p className=" font-urbanist text-[#5A6474]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}

          <div className="mt-14">
            <h2 className="text-center font-baloo text-[30px] font-semibold">
              Industries and Applications We Serve
            </h2>

            <p className="mx-auto mt-3 max-w-4xl text-center font-urbanist text-[#5A6474]">
              Our{" "}
              <a href="/contact-us" className="font-semibold text-[#2D6BFF]">
                water bottle making machines
              </a>{" "}
              are used by:
            </p>

            <div className="mt-8 grid grid-cols-2 gap-2 md:gap-6 md:grid-cols-3 xl:grid-cols-5">
              {industries.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#E5E7EB] bg-white p-4 md:p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-[#CB6801] hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#CB6801] text-3xl text-white">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 font-baloo text-lg">{item.title}</h3>
                  <p className="mt-2 font-baloo ">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="text-center">
            <h2 className="mt-3 font-baloo text-[30px] font-semibold">
              Our Values — What We Stand For
            </h2>
          </div>

          <div className="relative mt-10">
            {/* Vertical Line */}

            <div className="absolute left-8 top-0 h-full w-[2px] bg-[#CB6801]/20" />

            {values.map((item, index) => (
              <div key={index} className="relative mb-7 flex gap-8 last:mb-0">
                {/* Circle */}

                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#CB6801] text-2xl text-white shadow-lg">
                  {item.icon}
                </div>

                {/* Content */}

                <div className="pt-2">
                  <h3 className="font-baloo text-[20px] font-semibold text-[#14345D]">
                    {item.title}
                  </h3>

                  <p className="mt-3 font-urbanist text-[#5A6474]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F8FAFC] py-10">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center">
            <h2 className="mt-3 font-baloo text-[30px] font-semibold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <button
                  onClick={() => setActive(active === index ? -1 : index)}
                  className="flex w-full items-center justify-between px-6 py-3 text-left transition hover:bg-[#FFF8F3]"
                >
                  <h3 className="pr-5 font-baloo text-[20px] font-semibold text-[#14345D]">
                    Q{index + 1}. {faq.question}
                  </h3>

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#CB6801] text-white">
                    {active === index ? <FaMinus /> : <FaPlus />}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-gray-100 px-6 py-3 font-urbanist text-[#5A6474]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#14345D] py-10">
        {/* Background Pattern */}

        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1300px] px-6 text-center">
          <h2 className="mt-4 font-baloo text-[20px] font-semibold leading-tight text-white lg:text-[30px]">
            Talk to India’s Trusted Water Bottle Making Machine Manufacturer
          </h2>

          <p className="mx-auto mt-5 max-w-5xl font-urbanist text-lg text-white/90">
            Talk to India’s Trusted Water Bottle Making Machine Manufacturer
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/contact-us"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#CB6801] px-10 font-urbanist font-bold text-white"
            >
              <span className="relative z-10 flex items-center gap-3">
                Request a Quote
                <FaArrowRightLong />
              </span>

              <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1A3E73] transition-all duration-500 group-hover:h-[250px] group-hover:w-[250px]" />
            </Link>

            <Link
              href="tel:+919871494249"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 border-white px-10 font-urbanist font-bold text-white"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FaPhoneVolume />
                Call Now
              </span>

              <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CB6801] transition-all duration-500 group-hover:h-[250px] group-hover:w-[250px]" />
            </Link>
          </div>

          <div className="mt-12 border-t border-white/20 pt-10">
            <p className="font-baloo text-[22px] text-white">
              Suraj Plastic Industries
            </p>

            <p className="mt-3 font-urbanist text-[18px] leading-8 text-white/80">
              <a href="/contact-us" className="font-bold">
                Mineral Water Bottle Making Machine Manufacturer
              </a>{" "}
              | Water Bottle Making Machine Manufacturer | PET Stretch Blow
              Moulding Machines | New Delhi, India | Since 1982
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SEOContent;
