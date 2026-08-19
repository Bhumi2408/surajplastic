import { notFound } from "next/navigation";

import { products } from "@/app/data/products";

import Hero from "../../components/product/Hero";
import ProductOverview from "../../components/product/ProductOverview";
import Specification from "../../components/product/Specification";
import SeoRenderer from "../../components/product/SeoRenderer";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Not Found",
    };
  }

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
      canonical: `https://www.surajplasticindustries.com/products/${product.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return products.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  // Auto-generate FAQ schema from seo/seoBefore content blocks
  const allBlocks = [...(product.seoBefore || []), ...(product.seo || [])];
  const faqBlock = allBlocks.find((block) => block.type === "faq");

  const faqSchema = faqBlock
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqBlock.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  const finalSchema = product.schema || (faqSchema ? [faqSchema] : []);

  return (
    <>
      {finalSchema.map((schemaItem, index) => (
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
