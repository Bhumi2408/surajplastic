import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <article className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

      <Link href={`/${blog.slug}`}>

        <div className="relative h-[300px] overflow-hidden">

          <Image
            src={blog.image}
            fill
            alt={blog.title}
            className="object-contain transition duration-700 group-hover:scale-110"
          />

        </div>

      </Link>

      <div className="p-7">

        <span className="text-sm font-semibold uppercase tracking-[3px] text-[#D97706]">
          {blog.category}
        </span>

        <Link href={`/${blog.slug}`}>

          <h2 className="mt-2 line-clamp-2 font-baloo text-2xl leading-snug font-semibold text-[#13233B] transition group-hover:text-[#D97706]">
            {blog.title}
          </h2>

        </Link>

        <p className="mt-3 line-clamp-4 leading-8 text-gray-600">
          {blog.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t pt-6">

          <div>

            <p className="text-sm font-semibold uppercase text-[#13233B]">
              {blog.author}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              {blog.date}
            </p>

          </div>

          <Link
            href={`/${blog.slug}`}
            className="rounded-full border border-[#13233B] px-6 py-3 text-sm font-semibold text-[#13233B] transition hover:bg-[#13233B] hover:text-white"
          >
            Read More
          </Link>

        </div>

      </div>

    </article>
  );
}