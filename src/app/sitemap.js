import { products } from "@/app/data/products";
import { blogs } from "@/app/data/blogs";

const BASE_URL = "https://www.surajplasticindustries.com";

export default async function sitemap() {
  const staticPages = [
    "",
    "/about-us",
    "/contact-us",
    "/blog",
    "/products",
    "/career",
    "/spare-service",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const productPages = products.map((product) => ({
    url: `${BASE_URL}/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const blogPages = blogs.map((blog) => ({
    url: `${BASE_URL}/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...productPages,
    ...blogPages,
  ];
}