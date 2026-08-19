import { notFound } from "next/navigation";

import { blogs } from "@/app/data/blogs";

import BlogDetail from "../../components/blog/BlogDetail";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: blog.keywords,

    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.image],
    },

    alternates: {
      canonical: `https://www.surajplasticindustries.com/blog/${blog.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogs.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return <BlogDetail blog={blog} />;
}
