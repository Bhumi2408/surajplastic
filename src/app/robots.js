const BASE_URL = "https://blowmouldingmachine.surajplasticindustries.com/";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/llms.txt"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}