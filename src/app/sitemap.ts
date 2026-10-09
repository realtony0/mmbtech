import type { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://mmb-tech.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://mmb-tech.com/mentions-legales", lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
