"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Article {
  id: number;
  title: string;
  category: string;
  content: string;
  thumbnail?: string;
}

export default function ArticlesSection() {

  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const fetchArticles = async () => {

      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.log(error);
        return;
      }

      if (data) {
        setArticles(data);
      }
    };

    fetchArticles();

  }, []);

  // Filter Search
  const filteredArticles = useMemo(() => {

    return articles.filter((article) => {

      const keyword = search.toLowerCase();

      return (
        article.title.toLowerCase().includes(keyword) ||
        article.category.toLowerCase().includes(keyword) ||
        article.content.toLowerCase().includes(keyword)
      );
    });

  }, [articles, search]);

  return (
    <section className="px-6 md:px-20 py-24 bg-[#F5F1EA]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-[#2B4C7E] font-semibold mb-4">
            Artikel Terbaru
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2B4C7E] mb-8">
            Insight & Edukasi Mental Health
          </h2>

          {/* Search */}
          <div className="max-w-2xl mx-auto">

            <input
              type="text"
              placeholder="Cari artikel..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-full px-6 py-5 outline-none text-lg shadow-sm"
            />

          </div>

        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-8">

          {filteredArticles.map((article) => (

            <Link
              href={`/articles/${article.slug}`}
              key={article.id}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:scale-[1.02] transition duration-300"
            >

              {/* Thumbnail */}
              {article.thumbnail && (
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-56 object-cover"
                />
              )}

              {/* Content */}
              <div className="p-8">

                {/* Category */}
                <span className="text-sm text-[#2B4C7E] font-semibold uppercase tracking-wide">
                  {article.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#2B4C7E] mt-4 leading-snug">
                  {article.title}
                </h3>

                {/* Rich Text Preview */}
                <div
  className="
    prose
    prose-sm
    max-w-none
    mt-1

    overflow-hidden
    break-words

    prose-p:text-gray-600
    prose-p:text-justify
    prose-p:leading-relaxed
    prose-p:mb-3

    prose-headings:text-[#2B4C7E]
    prose-strong:text-[#2B4C7E]

    prose-ul:text-gray-600
    prose-ol:text-gray-600
    prose-li:text-gray-600
  "
>
  <div
    className="line-clamp-4"
    dangerouslySetInnerHTML={{
      __html: article.content,
    }}
  />
</div>

                {/* Button */}
                <div className="mt-6 text-[#2B4C7E] font-semibold">
                  Baca Selengkapnya →
                </div>

              </div>

            </Link>

          ))}

        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (

          <div className="text-center mt-20">

            <h3 className="text-3xl font-bold text-[#2B4C7E] mb-4">
              Artikel tidak ditemukan
            </h3>

            <p className="text-gray-500">
              Coba gunakan keyword lain.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}