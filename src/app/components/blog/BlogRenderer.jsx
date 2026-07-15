"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function BlogRenderer({ content = [] }) {
  if (!content.length) return null;

  return (
    <div className="space-y-6">
      {content.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="font-baloo text-4xl leading-tight text-[#13233B]"
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3 key={index} className="font-baloo text-3xl text-[#13233B]">
                {block.text}
              </h3>
            );

             case "h4":
            return (
              <h4 key={index} className="font-baloo text-2xl text-[#13233B]">
                {block.text}
              </h4>
            );

            case "h5":
            return (
              <h5 key={index} className="font-baloo text-xl text-[#13233B]">
                {block.text}
              </h5>
            );

          case "paragraph":
            return (
              <p key={index} className="text-[17px] leading-9 text-gray-700">
                {block.content
                  ? block.content.map((part, i) => {
                      let element = part.text;

                      if (part.bold) {
                        element = (
                          <strong className="font-semibold text-[#13233B]">
                            {element}
                          </strong>
                        );
                      }

                      if (part.link) {
                        element = (
                          <Link
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

          case "quote":
            return (
              <div
                key={index}
                className="rounded-3xl border-l-[6px] border-[#CB6801] bg-orange-50 p-8 italic leading-9 text-[#13233B]"
              >
                {block.text}
              </div>
            );

          case "checklist":
            return (
              <div key={index} className="space-y-5">
                {block.title && (
                  <h3 className="font-baloo text-3xl text-[#13233B]">
                    {block.title}
                  </h3>
                )}

                {block.items.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <FaCheckCircle className="mt-1 text-[#CB6801]" />

                    <div className="leading-8 text-gray-700">
                      {Array.isArray(item)
                        ? item.map((part, x) => {
                            let el = part.text;

                            if (part.bold) {
                              el = (
                                <strong className="text-[#13233B]">{el}</strong>
                              );
                            }

                            if (part.link) {
                              el = (
                                <Link
                                  href={part.link}
                                  className="font-semibold text-[#CB6801]"
                                >
                                  {el}
                                </Link>
                              );
                            }

                            return <span key={x}>{el}</span>;
                          })
                        : item}
                    </div>
                  </div>
                ))}
              </div>
            );

          case "list":
            return (
              <ul
                key={index}
                className="list-disc space-y-4 pl-8 leading-8 text-gray-700"
              >
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );

          case "numberList":
            return (
              <ol
                key={index}
                className="list-decimal space-y-5 pl-8 leading-8 text-gray-700"
              >
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            );

          case "image":
            return (
              <Image
                key={index}
                src={block.src}
                alt={block.alt}
                width={600}
                height={400}
                className="rounded-3xl"
              />
            );

          case "comparison":
            return (
              <div key={index} className="overflow-x-auto">
                {block.title && (
                  <h3 className="mb-6 font-baloo text-3xl text-[#13233B]">
                    {block.title}
                  </h3>
                )}

                <table className="min-w-full overflow-hidden rounded-3xl border border-slate-200">
                  <thead>
                    <tr className="bg-[#13233B]">
                      {block.headers.map((item, i) => (
                        <th
                          key={i}
                          className="border border-white/20 px-6 py-5 text-left font-semibold text-white"
                        >
                          {item}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {block.rows.map((row, i) => (
                      <tr key={i} className="even:bg-slate-50 hover:bg-orange-50">
                        {row.map((cell, j) => (
                          <td key={j} className="border px-6 py-5 leading-7">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "table":
            return (
              <div key={index} className="overflow-x-auto">
                {block.title && (
                  <h3 className="mb-6 font-baloo text-3xl text-[#13233B]">
                    {block.title}
                  </h3>
                )}

                <table className="min-w-full rounded-3xl border">
                  <tbody>
                    {block.rows.map((row, i) => (
                      <tr key={i} className="border-b even:bg-slate-50">
                        <td className="w-[35%] border-r bg-slate-100 px-6 py-5 font-semibold">
                          {row[0]}
                        </td>

                        <td className="px-6 py-5">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "cta":
            return (
              <div
                key={index}
                className="rounded-[30px] bg-[#13233B] p-12 text-center text-white"
              >
                <h2 className="font-baloo text-4xl">{block.title}</h2>

                <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/80">
                  {block.description}
                </p>

                <Link
                  href={block.link || "/contact-us"}
                  className="mt-8 inline-flex rounded-full bg-[#CB6801] px-10 py-4 font-semibold text-white transition hover:bg-[#b75d00]"
                >
                  {block.button || "Get Quote"}
                </Link>
              </div>
            );

          case "faq":
            return (
              <div key={index}>
                <h2 className="mb-8 font-baloo text-4xl text-[#13233B]">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-5">
                  {block.items.map((faq, i) => (
                    <details key={i} className="rounded-2xl border p-6">
                      <summary className="cursor-pointer text-xl font-semibold text-[#13233B]">
                        {faq.question}
                      </summary>

                      <p className="mt-5 leading-8 text-gray-700">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            );

          case "specification":
            return (
              <div key={index} className="overflow-x-auto">
                {block.title && (
                  <h2 className="mb-8 font-baloo text-4xl text-[#13233B]">
                    {block.title}
                  </h2>
                )}

                <table className="min-w-full border">
                  <thead>
                    <tr className="bg-[#13233B]">
                      {block.headers.map((head, i) => (
                        <th key={i} className="border px-5 py-5 text-white">
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {block.rows.map((row, i) => (
                      <tr key={i} className="even:bg-slate-50">
                        {row.map((cell, j) => (
                          <td key={j} className="border px-5 py-5">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}