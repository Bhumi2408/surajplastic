import { blogs } from "@/app/data/blogs";
import Image from "next/image";
import BlogCard from "../components/blog/BlogCard";

export const metadata = {
  title: "Blog | Suraj Plastic Industries",
  description:
    "Latest articles about PET Bottle Machines, Blow Moulding Machines, PET Preforms and Plastic Packaging Industry.",
};

export default function BlogsPage() {
  return (
    <>
      {/* HERO */}

      <section className="relative h-[420px] overflow-hidden">

        <Image
          src="/blog-banner.webp"
          fill
          priority
          alt="Blog"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white">

            <span className="rounded-full bg-[#D97706] px-5 py-2 text-sm uppercase tracking-[4px]">
              Latest Articles
            </span>

            <h1 className="mt-6 font-baloo text-5xl font-bold">
              Our Blog
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-200">
              Explore expert articles, buying guides, machine comparisons,
              manufacturing tips and everything you need to know about PET
              Bottle Manufacturing.
            </p>

          </div>

        </div>

      </section>

      {/* BLOGS */}

      <section className="bg-white py-16 px-5 lg:px-20">

        <div className="mx-auto max-w-[1600px] px-6">

          <div className="mb-10 text-center">

            <span className="font-semibold uppercase tracking-[4px] text-[#D97706]">
              Knowledge Center
            </span>

            <h2 className="mt-3 font-baloo text-4xl text-[#13233B]">
              Latest Articles
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#D97706]" />

          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}

          </div>

        </div>

      </section>
    </>
  );
}