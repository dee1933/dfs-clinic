"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { supabaseAuth } from "@/lib/supabase-auth";

// =========================
// REACT QUILL
// =========================
const ReactQuill = dynamic(
  () => import("react-quill-new"),
  { ssr: false }
);

// =========================
// GENERATE SLUG
// =========================
const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function AdminPage() {
const router = useRouter();

  // =========================
  // STATES
  // =========================
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const [articles, setArticles] = useState<any[]>([]);
  const [editingArticle, setEditingArticle] = useState<any>(null);

  // =========================
  // QUILL REF
  // =========================
  const quillRef = useRef<any>(null);
  useEffect(() => {

  const checkSession = async () => {

    const {
      data: { session },
    } = await supabaseAuth.auth.getSession();

    if (!session) {
      router.push("/admin/login");
      return;
    }

    fetchArticles();
  };

  checkSession();

}, [router]);

  // =========================
  // FETCH ARTICLES
  // =========================
  
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

  // =========================
  // IMAGE UPLOAD FOR QUILL
  // =========================
  const handleImageUpload = async () => {

    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");

    input.click();

    input.onchange = async () => {

      const file = input.files?.[0];

      if (!file) return;

      const fileName = `${Date.now()}-${file.name}`;

      // Upload image
      const { error } = await supabase.storage
        .from("editor-images")
        .upload(fileName, file);

      if (error) {
        console.log(error);
        alert("Upload gambar gagal");
        return;
      }

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage
        .from("editor-images")
        .getPublicUrl(fileName);

      // Insert image into editor
setContent(
  (prev) => prev + `<p><img src="${publicUrl}" /></p>`
);
};

  };

  // =========================
  // QUILL MODULES
  // =========================
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
      handlers: {
        image: handleImageUpload,
      },
    },
  };

  // =========================
  // HANDLE SUBMIT
  // =========================
  const handleSubmit = async () => {

    // =========================
    // UPDATE ARTICLE
    // =========================
    if (editingArticle) {

      let thumbnailUrl = editingArticle.thumbnail;

      // Upload new thumbnail
      if (thumbnail) {

        const fileName = `${Date.now()}-${thumbnail.name}`;

        const { error: uploadError } = await supabase.storage
          .from("articles")
          .upload(fileName, thumbnail);

        if (uploadError) {
          console.log(uploadError);
          alert("Upload thumbnail gagal");
          return;
        }

        const {
          data: { publicUrl },
        } = supabase.storage
          .from("articles")
          .getPublicUrl(fileName);

        thumbnailUrl = publicUrl;
      }

      // Update article
      const { error } = await supabase
        .from("articles")
        .update({
          title,
          slug: generateSlug(title),
          category,
          content,
          thumbnail: thumbnailUrl,
        })
        .eq("id", editingArticle.id);

      if (error) {
        console.log(error);
        alert("Gagal update artikel");
        return;
      }

      alert("Artikel berhasil diupdate");

      setEditingArticle(null);

      setTitle("");
      setCategory("");
      setContent("");
      setThumbnail(null);

      fetchArticles();

      return;
    }

    // =========================
    // CREATE ARTICLE
    // =========================
    if (!thumbnail) {
      alert("Thumbnail belum dipilih");
      return;
    }

    const fileName = `${Date.now()}-${thumbnail.name}`;

    // Upload thumbnail
    const { error: uploadError } = await supabase.storage
      .from("articles")
      .upload(fileName, thumbnail);

    if (uploadError) {
      console.log(uploadError);
      alert("Upload thumbnail gagal");
      return;
    }

    // Get public URL
    const {
      data: { publicUrl },
    } = supabase.storage
      .from("articles")
      .getPublicUrl(fileName);

    // Insert article
    const { error } = await supabase
      .from("articles")
      .insert([
        {
          title,
          slug: generateSlug(title),
          category,
          content,
          thumbnail: publicUrl,
        },
      ]);

    if (error) {
      console.log(error);
      alert("Gagal upload artikel");
      return;
    }

    alert("Artikel berhasil ditambahkan");

    setTitle("");
    setCategory("");
    setContent("");
    setThumbnail(null);

    fetchArticles();
  };

  // =========================
  // DELETE ARTICLE
  // =========================
  const handleDelete = async (id: number) => {

    const confirmDelete = confirm("Hapus artikel ini?");

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("articles")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);
      alert("Gagal menghapus artikel");
      return;
    }

    fetchArticles();
  };
// =========================
// LOGOUT
// =========================
const handleLogout = async () => {

  await supabaseAuth.auth.signOut();

  window.location.href = "/admin/login";

};
  // =========================
  // UI
  // =========================
  return (
    <main className="min-h-screen bg-[#F5F1EA] p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

{/* Header */}
<div className="flex justify-between items-center mb-12">

  <h1 className="text-4xl md:text-5xl font-bold text-[#2B4C7E]">
    DFS Admin Dashboard
  </h1>

  <button
    onClick={handleLogout}
    className="
      bg-red-500
      hover:bg-red-600
      text-white
      px-6
      py-3
      rounded-full
      transition
    "
  >
    Logout
  </button>

</div>

{/* Form */}
<div className="bg-white rounded-[32px] p-8 shadow-sm mb-12">

          <h2 className="text-3xl font-bold text-[#2B4C7E] mb-8">
            {editingArticle ? "Edit Artikel" : "Upload Artikel"}
          </h2>

          <div className="space-y-6">

            {/* Title */}
            <input
              type="text"
              placeholder="Judul Artikel"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none"
            />

            {/* Category */}
            <input
              type="text"
              placeholder="Kategori"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none"
            />

            {/* Rich Text Editor */}
            <div className="bg-white rounded-2xl overflow-hidden">

              <ReactQuill
  theme="snow"
  value={content}
  onChange={setContent}
  modules={modules}
  className="min-h-[300px]"
/>

            </div>

            {/* Thumbnail */}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setThumbnail(e.target.files[0]);
                }
              }}
              className="w-full border border-gray-200 rounded-2xl px-5 py-4"
            />

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <button
                onClick={handleSubmit}
                className="bg-[#2B4C7E] text-white px-8 py-4 rounded-full"
              >
                {editingArticle ? "Update Artikel" : "Upload Artikel"}
              </button>

              {editingArticle && (
                <button
                  onClick={() => {

                    setEditingArticle(null);

                    setTitle("");
                    setCategory("");
                    setContent("");
                    setThumbnail(null);

                  }}
                  className="bg-gray-300 text-black px-8 py-4 rounded-full"
                >
                  Batal
                </button>
              )}

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}