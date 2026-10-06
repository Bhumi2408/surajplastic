const BASE_URL = "https://www.surajplasticindustries.in/";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/llms.txt"],
    },
    sitemap: `${BASE_URL}sitemap.xml`,
  };
}