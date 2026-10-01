import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ranto-rafalimanana.vercel.app";
  const locales = ["fr", "en"];
  const pages = ["", "/cv"];

  const routes: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    pages.forEach((page) => {
      routes.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            fr: `${baseUrl}/fr${page}`,
            en: `${baseUrl}/en${page}`,
          },
        },
      });
    });
  });

  return routes;
}
