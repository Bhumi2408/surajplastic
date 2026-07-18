import { notFound } from "next/navigation";

import { products } from "@/app/data/products";
import { blogs } from "@/app/data/blogs";

import Hero from "../components/product/Hero";
import ProductOverview from "../components/product/ProductOverview";
import Specification from "../components/product/Specification";
import SeoRenderer from "../components/product/SeoRenderer";

// Blog component (baad me banayenge)
import BlogDetail from "../components/blog/BlogDetail";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  // Product
  const product = products.find((item) => item.slug === slug);

  if (product) {
    return {
      title: product.metaTitle,
      description: product.metaDescription,
      keywords: product.keywords,

      openGraph: {
        title: product.metaTitle,
        description: product.metaDescription,
        images: [product.heroImage],
      },

      alternates: {
        canonical: `https://www.surajplasticindustries.com/${product.slug}/`,
      },
    };
  }

  // Blog
  const blog = blogs.find((item) => item.slug === slug);

  if (blog) {
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
        canonical: `https://www.surajplasticindustries.com/${blog.slug}/`,
      },
    };
  }

  return {
    title: "Not Found",
  };
}

export async function generateStaticParams() {
  return [
    ...products.map((item) => ({
      slug: item.slug,
    })),

    ...blogs.map((item) => ({
      slug: item.slug,
    })),
  ];
}

export default async function Page({ params }) {
  const { slug } = await params;

  // ======================
  // PRODUCT
  // ======================

  const product = products.find((item) => item.slug === slug);

  if (product) {
    return (
      <>
        {product.schema?.map((schemaItem, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItem) }}
          />
        ))}

        <Hero
          title={product.name}
          image={product.heroImage}
        />

        <ProductOverview product={product} />

        {product.seoBefore?.length > 0 && (
          <SeoRenderer content={product.seoBefore} />
        )}

        {product.specification && (
          <Specification
            title={
              product.specification.title ||
              "Technical Specifications"
            }
            headers={product.specification.headers}
            rows={product.specification.rows}
          />
        )}

        {product.seo?.length > 0 && (
          <SeoRenderer content={product.seo} />
        )}
      </>
    );
  }

  // ======================
  // BLOG
  // ======================

  const blog = blogs.find((item) => item.slug === slug);

  if (blog) {
    return <BlogDetail blog={blog} />;
  }

  notFound();
}