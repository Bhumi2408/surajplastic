"use client";

import Link from "next/link";
import { useState } from "react";
import { FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

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

export default function SeoRenderer({ content = [] }) {

  if (!content || content.length === 0) {
    return null;
  }

  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-[1400px] px-6">
        {content.map((block, index) => {
          switch (block.type) {
            // ==========================
            // H2
            // ==========================

            case "h2":
              return (
                <div key={index} className="mt-5 first:mt-0">
                  <h2 className="mt-4 font-baloo text-[30px] font-semibold text-[#183153]">
                    {block.text}
                  </h2>
                  <span className="inline-block h-1 w-20 rounded-full bg-[#CB6801]" />
                </div>
              );

            // ==========================
            // H3
            // ==========================

            case "h3":
              return (
                <div key={index} className="mt-5">
                  <h3 className="mt-4 font-baloo text-[28px] font-semibold text-[#183153]">
                    {block.text}
                  </h3>
                  <span className="inline-block h-1 w-20 rounded-full bg-[#CB6801]" />
                </div>
              );

            // ==========================
            // H4
            // ==========================

            case "h4":
              return (
               <div key={index} className="mt-7">
                  <h4 className="mt-4 font-baloo text-[24px] font-semibold text-[#183153]">
                    {block.text}
                  </h4>
                  <span className="inline-block h-1 w-20 rounded-full bg-[#CB6801]" />
                </div>
              );

            // ==========================
            // Paragraph
            // ==========================

            case "paragraph":
              return (
                <p key={index} className="mt-4 leading-8 text-[#555]">
                  {block.content
                    ? block.content.map((part, i) => {
                        let element = part.text;

                        if (part.bold) {
                          element = <strong>{element}</strong>;
                        }

                        if (part.link) {
                          element = (
                            <Link
                              key={i}
                              href={part.link}
                              className="font-semibold text-[#CB6801] hover:underline"
                            >
                              {element}
                            </Link>
                          );
                        }

                        return <span key={i}>{element}</span>;
                      })
                    : block.text}
                </p>
              );

              // list
              case "list":
            return (
              <ul
                key={index}
                className="list-disc space-y-4 pl-8 mt-3 leading-8 text-gray-700"
              >
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );


            // ==========================
            // Checklist
            // ==========================

            case "checklist":
              return (
                <div key={index} className="mt-6 grid gap-5 md:grid-cols-2">
                  {block.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-[#CB6801] hover:shadow-lg"
                    >
                      <FaCheckCircle className="mt-1 text-xl text-[#CB6801]" />

                      <span className="leading-7 text-[#4B5563]">
                        {Array.isArray(item)
                          ? item.map((part, idx) => {
                              let element = part.text;

                              if (part.bold) {
                                element = <strong>{element}</strong>;
                              }

                              if (part.link) {
                                element = (
                                  <Link
                                    key={idx}
                                    href={part.link}
                                    className="font-semibold text-[#CB6801] hover:underline"
                                  >
                                    {element}
                                  </Link>
                                );
                              }

                              return <span key={idx}>{element}</span>;
                            })
                          : item}
                      </span>
                    </div>
                  ))}
                </div>
              );

            // ==========================
            // Timeline
            // ==========================

            case "timeline":
              return (
                <div key={index} className="mt-8 space-y-3">
                  {block.items.map((item, i) => (
                    <div key={i} className="relative flex gap-8">
                      <div className="flex flex-col items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#CB6801] font-bold text-white">
                          {i + 1}
                        </div>

                        {i !== block.items.length - 1 && (
                          <div className="mt-2 h-full w-[2px] bg-orange-200" />
                        )}
                      </div>

                      <div className="pb-8">
                        <h4 className="font-baloo text-[24px] text-[#183153]">
                          {item.title}
                        </h4>

                        <p className="mt-1 leading-8 text-[#5F6368]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              );

            // ==========================
            // Quote
            // ==========================

            case "quote":
              return (
                <div
                  key={index}
                  className="mt-8 rounded-2xl border-l-4 border-[#CB6801] bg-orange-50 p-3"
                >
                  <p className="italic text-[#374151]">
                    {block.text}
                  </p>
                </div>
              );

            // ==========================
            // TABLE
            // ==========================

            case "table":
              return (
                <div
                  key={index}
                  className="mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-lg"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[#183153]">
                          {block.headers.map((head, i) => (
                            <th
                              key={i}
                              className="border border-white/10 px-6 py-5 text-left font-semibold text-white"
                            >
                              {head}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {block.rows.map((row, r) => (
                          <tr
                            key={r}
                            className="odd:bg-white even:bg-slate-50 hover:bg-orange-50"
                          >
                            {row.map((cell, c) => (
                              <td
                                key={c}
                                className="border border-slate-200 px-6 py-5 text-[15px] leading-7 text-[#4B5563]"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );

            // ==========================
            // COMPARISON TABLE
            // ==========================

            case "comparison":
              return (
                <div
                  key={index}
                  className="mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-lg"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[#CB6801]">
                          {block.headers.map((head, i) => (
                            <th
                              key={i}
                              className="border border-white/20 px-6 py-5 text-left font-semibold text-white"
                            >
                              {head}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {block.rows.map((row, r) => (
                          <tr
                            key={r}
                            className="odd:bg-white even:bg-orange-50"
                          >
                            {row.map((cell, c) => (
                              <td
                                key={c}
                                className={`border border-slate-200 px-6 py-5 ${
                                  c === 0
                                    ? "font-semibold text-[#183153]"
                                    : "text-[#555]"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );

            // ==========================
            // FAQ
            // ==========================

            case "faq":
              return (
                <div key={index} className="mt-10 space-y-4">
                  {block.items.map((faq, i) => (
                    <FaqItem
                      key={i}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              );

            // ==========================
            // IMAGE
            // ==========================

            case "image":
              return (
                <div key={index} className="mt-12">
                  <img
                    src={block.src}
                    alt={block.alt}
                    className="w-full rounded-3xl"
                  />
                </div>
              );

            // ==========================
            // applications
            // ==========================

            case "applications":
              return (
                <div
                  key={index}
                  className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {block.items.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#CB6801] hover:shadow-xl"
                    >
                      <h3 className="font-baloo text-[24px] text-[#183153]">
                        {item.title}
                      </h3>

                      <ul className="mt-4 space-y-3">
                        {item.points.map((point, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-[#555]"
                          >
                            <FaCheckCircle className="mt-1 text-[#CB6801]" />

                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              );

            // ==========================
            // benefits
            // ==========================

            case "benefits":
              return (
                <div
                  key={index}
                  className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                >
                  {block.items.map((item, i) => (
                    <div
                      key={i}
                      className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#CB6801] hover:shadow-xl"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 transition group-hover:bg-[#CB6801]">
                          <FaCheckCircle className="text-[#CB6801] group-hover:text-white" />
                        </div>

                        <div>
                          <h3 className="font-baloo text-[22px] text-[#183153]">
                            {item.title}
                          </h3>

                          <p className="mt-3 leading-7 text-[#5F6368]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );

            // ==========================
            // STATS
            // ==========================

            case "stats":
              return (
                <div
                  key={index}
                  className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
                >
                  {block.items.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                    >
                      <h3 className="font-baloo text-5xl text-[#CB6801]">
                        {item.value}
                      </h3>

                      <p className="mt-4 text-[#555]">{item.label}</p>
                    </div>
                  ))}
                </div>
              );

            // ==========================
            // CTA
            // ==========================

            case "cta":
              return (
                <div
                  key={index}
                  className="mt-16 rounded-[30px] bg-[#183153] px-10 py-14 text-center"
                >
                  <h2 className="font-baloo text-4xl text-white">
                    {block.title}
                  </h2>

                  <p className="mx-auto mt-5 max-w-3xl text-white/80 leading-8">
                    {block.description}
                  </p>

                  <a
                    href="/contact"
                    className="mt-8 inline-flex rounded-full bg-[#CB6801] px-10 py-4 font-semibold text-white transition hover:scale-105"
                  >
                    Get Free Quote
                  </a>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    </section>
  );
}
