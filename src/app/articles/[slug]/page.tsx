import Link from "next/link";
import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// =========================
// SEO METADATA
// =========================
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {

  const { slug } = await params;

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!article) {
    return {
      title: "Artikel DFS",
      description: "DFS Psychological Center",
    };
  }

  return {
    title: `${article.title} | DFS Psychological Center`,
    description: article.content?.replace(/<[^>]*>/g, "").slice(0, 150),

    openGraph: {
      title: article.title,
      description: article.content?.replace(/<[^>]*>/g, "").slice(0, 150),
      images: article.thumbnail
        ? [article.thumbnail]
        : [],
    },
  };
}

export default async function ArticlePage({
  params,
}: PageProps) {

  const { slug } = await params;

  // =========================
  // CURRENT ARTICLE
  // =========================
  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();

  // =========================
  // RELATED ARTICLES
  // =========================
  const { data: relatedArticles } = await supabase
    .from("articles")
    .select("*")
    .neq("slug", slug)
    .limit(3);

  // =========================
  // ARTICLE NOT FOUND
  // =========================
  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F5F1EA]">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-[#2B4C7E] mb-4">
            Artikel tidak ditemukan
          </h1>

          <Link
            href="/"
            className="text-[#2B4C7E] font-semibold"
          >
            ← Kembali ke Homepage
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F1EA] py-20 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#2B4C7E] font-semibold mb-8 hover:opacity-70 transition"
        >
          ← Kembali
        </Link>

        {/* Article */}
        <article className="bg-white rounded-[40px] overflow-hidden shadow-sm">

          {/* Thumbnail */}
          {article.thumbnail && (
            <div className="p-6 md:p-10 pb-0">

              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full max-h-[500px] object-contain rounded-[28px] bg-[#F5F1EA]"
              />

            </div>
          )}

          {/* Content */}
          <div className="p-8 md:p-14">

            {/* Category */}
            <p className="text-sm uppercase tracking-[0.2em] text-[#2B4C7E] font-semibold mb-5">
              {article.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl md:text-[42px] font-bold text-[#2B4C7E] leading-tight mb-8">
              {article.title}
            </h1>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 mb-10"></div>

            {/* Article Content */}
<div
  className="
    prose
    prose-lg
    max-w-none

    break-words
    overflow-hidden

    prose-headings:text-[#2B4C7E]
    prose-headings:mt-10
    prose-headings:mb-6

    prose-h2:text-3xl
    prose-h2:font-bold

    prose-h3:text-2xl
    prose-h3:font-semibold

    prose-p:text-gray-700
    prose-p:text-left
    prose-p:leading-8
    prose-p:mb-6

    prose-strong:text-[#2B4C7E]

    prose-li:text-gray-700
    prose-li:leading-8

    prose-ul:pl-6
    prose-ol:pl-6

    prose-img:rounded-2xl
    prose-img:w-full
    prose-img:max-w-full
    prose-img:h-auto
    prose-img:shadow-sm
    prose-img:my-8

    prose-a:text-blue-600
    prose-a:no-underline
    hover:prose-a:underline
  "
  dangerouslySetInnerHTML={{
    __html: article.content,
  }}
/>

          </div>

        </article>

        {/* Related Articles */}
        <section className="mt-20">

          <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C7E] mb-10 text-center">
            Artikel Lainnya
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {relatedArticles?.map((item) => (

              <Link
  key={item.id}
  href={`/articles/${item.slug}`}
  className="
    bg-white
    rounded-[32px]
    overflow-hidden
    shadow-sm
    hover:scale-[1.02]
    transition
    duration-300
    block
  "
>

  {/* Thumbnail */}
  <img
    src={item.thumbnail || "/placeholder.jpg"}
    alt={item.title}
    className="w-full h-52 object-cover"
  />

  {/* Content */}
  <div className="p-6">

    {/* Category */}
    <p className="
      text-sm
      text-[#2B4C7E]
      font-semibold
      mb-3
      uppercase
      tracking-wide
    ">
      {item.category}
    </p>

    {/* Title */}
    <h3 className="
      text-xl
      md:text-2xl
      font-bold
      text-[#2B4C7E]
      leading-snug
    ">
      {item.title}
    </h3>

    {/* Preview */}
    <p className="
      text-gray-600
      mt-4
      line-clamp-3
      leading-relaxed
      text-justify
    ">
      {item.content
        ?.replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .slice(0, 180)}
    </p>

    {/* Read More */}
    <div className="mt-6 text-[#2B4C7E] font-semibold">
      Baca Selengkapnya →
    </div>

  </div>

</Link>

            ))}

          </div>

        </section>

      </div>

    </main>
  );
}