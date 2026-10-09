import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/promo.html" },
    sitemap: "https://mmb-tech.com/sitemap.xml",
  };
}
