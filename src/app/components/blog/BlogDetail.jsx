import Image from "next/image";
import Link from "next/link";
import BlogRenderer from "./BlogRenderer";

export default function BlogDetail({ blog }) {
  return (
    <>
      {/* Schema Markup - only renders if blog.schema exists */}
      {blog.schema?.map((schemaItem, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItem) }}
        />
      ))}

      {/* HERO */}
      <section className="relative h-[520px] overflow-hidden">

        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 flex items-center">

          <div className="mx-auto w-full max-w-[1500px] px-6">

            <span className="rounded-full bg-[#CB6801] px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-white">
              {blog.category}
            </span>

            <h1 className="mt-6 max-w-5xl font-baloo text-5xl leading-tight text-white lg:text-6xl">
              {blog.title}
            </h1>

            <div className="mt-8 flex flex-wrap gap-6 text-white/90">

              <span>{blog.author}</span>

              <span>•</span>

              <span>{blog.date}</span>

              <span>•</span>

              <span>{blog.readTime}</span>

            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="bg-white py-20">

        <div className="mx-auto grid max-w-[1500px] gap-16 px-6 lg:grid-cols-[1fr_330px]">

          {/* LEFT */}

          <article>

            <BlogRenderer
              content={blog.content}
            />

          </article>

          {/* SIDEBAR */}

          <aside>

            <div className="sticky top-24 space-y-8">

              {/* CTA */}

              <div className="rounded-3xl bg-[#13233B] p-8 text-white">

                <h3 className="font-baloo text-3xl">
                  Need Expert Advice?
                </h3>

                <p className="mt-4 leading-8 text-white/80">
                  Looking for the right PET Bottle Making Machine?
                  Talk with our experts today.
                </p>

                <Link
                  href="/contact-us"
                  className="mt-8 inline-flex rounded-full bg-[#CB6801] px-8 py-4 font-semibold text-white transition hover:bg-[#b85d00]"
                >
                  Get Free Quote
                </Link>

              </div>

              {/* RELATED */}

              <div className="rounded-3xl border p-8">

                <h3 className="font-baloo text-3xl text-[#13233B]">
                  Related Articles
                </h3>

                <div className="mt-6 space-y-5">

                  {blog.related?.map((item) => (

                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      className="block border-b pb-4 transition hover:text-[#CB6801]"
                    >

                      <p className="font-semibold leading-7">
                        {item.title}
                      </p>

                    </Link>

                  ))}

                </div>

              </div>

            </div>

          </aside>

        </div>

      </section>
    </>
  );
}