import { products } from "@/app/data/products";
import { blogs } from "@/app/data/blogs";

const BASE_URL = "https://www.surajplasticindustries.com";

export const dynamic = "force-static";

export default async function sitemap() {
  const staticPages = [
    "",
    "/about",
    "/contact-us",
    "/blog",
    "/products",
    "/products/automatic-pet-bottle-moulding-machine-manufacturer",
    "/products/mineral-water-bottle-making-machine-manufacturer",
    "/products/pet-bottle-blow-machine-manufacturer",
    "/career",
    "/spare-service",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.8,
  }));

  const productPages = products.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  }));

  const blogPages = blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...productPages,
    ...blogPages,
  ];
}