"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

// ==========================================
// Mini markdown-like parser: **bold** and [text](/link)
// ==========================================

function renderFormattedText(text) {
  if (!text) return null;

  const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
  const parts = text.split(regex).filter((part) => part !== "");

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-bold text-[#CB6801]">{part.slice(2, -2)}</strong>;
    }

    const linkMatch = part.match(/^\[(.*)\]\((.*)\)$/);
    if (linkMatch) {
      const [, linkText, linkHref] = linkMatch;
      return (
        <Link
          key={i}
          href={linkHref}
          className="font-semibold text-[#CB6801] hover:underline"
        >
          {linkText}
        </Link>
      );
    }

    return <span key={i}>{part}</span>;
  });
}

function renderInlineContent(parts = []) {
  return parts.map((part, i) => {
    let element = part.text || "";

    if (part.bold) {
      element = <strong key={i} className="font-semibold text-[#CB6801]">{element}</strong>;
    }

    if (part.link) {
      element = (
        <Link key={i} href={part.link} className="font-semibold text-[#CB6801] hover:underline">
          {element}
        </Link>
      );
    }

    return <span key={i}>{element}</span>;
  });
}

export default function ProductOverview({ product }) {
  const introTitle = product.overviewIntro?.title;
  const introParagraphs = product.overviewIntro?.paragraphs ?? [];

  return (
    <section className="bg-white pt-20 pb-10 px-5 lg:px-20">
      <div className="mx-auto grid max-w-[1600px] gap-16 items-center px-6 lg:grid-cols-2">
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

        <div>
          {introTitle && (
            <h2 className="font-baloo text-[30px] font-semibold leading-tight text-[#13233B]">
              {introTitle}
            </h2>
          )}

          {introParagraphs.map((paragraph, index) => (
            <p key={index} className="mt-4 leading-8 text-[#555]">
              {typeof paragraph === "string"
                ? renderFormattedText(paragraph)
                : paragraph?.content
                  ? renderInlineContent(paragraph.content)
                  : Array.isArray(paragraph)
                    ? renderInlineContent(paragraph)
                    : null}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}