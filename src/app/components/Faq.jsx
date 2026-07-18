"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Who is the best Blow Moulding Machines Manufacturer in Delhi?",
    answer:
      "Suraj Plastic Industries is a leading Blow Moulding Machines Manufacturer in Delhi, with over 40 years of experience since 1982, ISO 9001:2015 certification, and 4000+ machines sold across India and abroad.",
  },
  {
    question:
      "What types of blow moulding machines does Suraj Plastic Industries manufacture?",
    answer:
      "Suraj Plastic Industries manufactures Semi Automatic, High Speed Semi Automatic, Automatic Hand Feed, Auto Drop, and Fully Automatic PET Preform Stretch Blow Moulding Machines, with custom capacities available up to 25 litres.",
  },
  {
    question: "What products can be made using these blow moulding machines?",
    answer:
      "These machines can produce PET bottles and jars for packaged drinking water, 20-litre water jars, soft drinks (CSD), edible oil, cosmetics, liquid detergents, pharmaceutical liquids, baby feeding bottles, lubricants, and more.",
  },
  {
    question:
      "Does Suraj Plastic Industries export blow moulding machines internationally?",
    answer:
      "Yes, Suraj Plastic Industries exports its blow moulding machines to 12+ countries, in addition to serving customers across India.",
  },
  {
    question: "Is Suraj Plastic Industries a certified manufacturer?",
    answer:
      "Yes, Suraj Plastic Industries is an ISO 9001:2015 certified company, also recognized by FIEO, MSME, and UK certification bodies.",
  },
  {
    question:
      "Does Suraj Plastic Industries provide installation and after-sales support?",
    answer:
      "Yes, the company provides complete installation and commissioning support across India and globally, along with ongoing maintenance, machine upgrades, and after-sales technical assistance.",
  },
  {
    question:
      "Can Suraj Plastic Industries customize a blow moulding machine for specific production needs?",
    answer:
      "Yes, the company offers consultation and customization services, helping clients select and configure the right machine model based on their required output, bottle size, and industry application.",
  },
  {
    question:
      "How many years of experience does Suraj Plastic Industries have?",
    answer:
      "Suraj Plastic Industries has been in operation since 1982 and has been manufacturing PET Preform Stretch Blow Moulding Machines specifically since 1997.",
  },
  {
    question: "How many machines has Suraj Plastic Industries sold so far?",
    answer:
      "Suraj Plastic Industries has sold over 4000 blow moulding machines to date, serving customers across India and internationally.",
  },
  {
    question: "Where is Suraj Plastic Industries located?",
    answer:
      "Suraj Plastic Industries is located at D-18, Naresh Park Extension, Nangloi, New Delhi - 110041, and serves customers across Delhi NCR, India, and internationally.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between bg-white px-6 py-5 text-left font-semibold text-[#183153]"
      >
        {question}

        {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t bg-slate-50 px-6 py-5 leading-8 text-[#555]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="bg-white py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-[1400px] px-6">
        <div className="text-center">
          <h2 className="font-baloo text-[42px] font-semibold text-[#183153]">
            Frequently Asked Questions
          </h2>

          <span className="mx-auto mt-3 inline-block h-1 w-20 rounded-full bg-[#CB6801]" />
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
