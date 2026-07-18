const BASE_URL = "https://www.surajplasticindustries.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/llms.txt"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}