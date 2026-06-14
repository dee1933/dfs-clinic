import { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = "http://localhost:3000";

  const { data: articles } = await supabase
    .from("articles")
    .select("slug, created_at");

  const articleUrls =
    articles?.map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: article.created_at,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })) || [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...articleUrls,
  ];
}