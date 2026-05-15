"use client";

import { useState } from "react";


import {
  HeartHandshake,
Brain,
Users,
Menu,
X,
Calendar,
MessageCircle,
ArrowRight,
} from "lucide-react";

export default function Home() {

  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
const [service, setService] = useState("");
const [message, setMessage] = useState("");
const [kokologiResult, setKokologiResult] = useState("");

  const handleAnswer = (value: number) => {
  setScore(value);
  setFinished(true);
};
const handleKokologi = (color: string) => {

  if (color === "red") {
    setKokologiResult(
      "Anda adalah pribadi penuh semangat, berani, dan emosional."
    );
  }

  if (color === "blue") {
    setKokologiResult(
      "Anda cenderung tenang, pemikir, dan menyukai kestabilan."
    );
  }

  if (color === "green") {
    setKokologiResult(
      "Anda memiliki jiwa hangat, penyayang, dan menyukai harmoni."
    );
  }
};
const handleWhatsAppBooking = () => {

  const phoneNumber = "628996009682";

  const text = `Halo DFS Psychological Center,

Nama: ${name}
Layanan: ${service}

Kebutuhan/Keluhan:
${message}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

  window.open(whatsappURL, "_blank");
};
  

  return (
    <main className="min-h-screen bg-[#F5F1EA] touch-manipulation">

      {/* Navbar */}
      <nav className="relative flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-[999]">
        <h1 className="text-3xl font-bold text-[#2B4C7E]">
          DFS
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-[#2B4C7E]">Home</a>
          <a href="#" className="hover:text-[#2B4C7E]">Tentang</a>
          <a href="#" className="hover:text-[#2B4C7E]">Layanan</a>
          <a href="#" className="hover:text-[#2B4C7E]">Psikolog</a>
          <a href="#" className="hover:text-[#2B4C7E]">Artikel</a>
          <a href="#" className="hover:text-[#2B4C7E]">Booking</a>
        </div> 
        {/* Mobile Button */}
<button type="button"
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-[#2B4C7E]"
>
  {menuOpen ? <X size={32} /> : <Menu size={32} />}
</button>
{/* Mobile Menu */}
{menuOpen && (
  <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-5 md:hidden z-50">

    <a href="#" className="text-[#2B4C7E] font-medium">
      Home
    </a>

    <a href="#" className="text-[#2B4C7E] font-medium">
      Tentang
    </a>

    <a href="#" className="text-[#2B4C7E] font-medium">
      Layanan
    </a>

    <a href="#" className="text-[#2B4C7E] font-medium">
      Psikolog
    </a>

    <a href="#" className="text-[#2B4C7E] font-medium">
      Artikel
    </a>

    <a href="#" className="text-[#2B4C7E] font-medium">
      Booking
    </a>

  </div>
)}
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>

          <div className="inline-block px-4 py-2 bg-[#DCE7DD] rounded-full text-[#2B4C7E] font-medium mb-6">
            DFS Psychological Center
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-[#2B4C7E] leading-tight">
            Sahabat <br />
            Keluarga Anda
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
            DFS hadir sebagai ruang aman dan profesional untuk membantu keluarga
            tumbuh lebih sehat, harmonis, dan bahagia.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button type="button" className="bg-[#2B4C7E] cursor-pointer text-white px-7 py-4 rounded-full hover:scale-105 transition">
              Booking Konsultasi
            </button>

            <button className="border border-[#2B4C7E] cursor-pointer text-[#2B4C7E] px-7 py-4 rounded-full hover:bg-[#2B4C7E] hover:text-white transition">
              Self Assessment
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6">

            <div>
              <h3 className="text-3xl font-bold text-[#2B4C7E]">
                1000+
              </h3>
              <p className="text-gray-600 mt-2">
                Konseling
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#2B4C7E]">
                150+
              </h3>
              <p className="text-gray-600 mt-2">
                Corporate
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#2B4C7E]">
                95%
              </h3>
              <p className="text-gray-600 mt-2">
                Kepuasan
              </p>
            </div>

          </div>

        </div>

        {/* Right */}
        <div className="relative">

          <div className="bg-gradient-to-br from-[#DCE7DD] to-[#B7C9B9] rounded-[40px] p-10 shadow-xl">

            <div className="grid gap-6">

              <div className="bg-white rounded-3xl p-6 shadow-md flex items-center gap-4">
                <div className="bg-[#DCE7DD] p-4 rounded-2xl">
                  <HeartHandshake className="text-[#2B4C7E]" size={32} />
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#2B4C7E]">
                    Family Support
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Pendampingan keluarga profesional
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-md flex items-center gap-4">
                <div className="bg-[#DCE7DD] p-4 rounded-2xl">
                  <Brain className="text-[#2B4C7E]" size={32} />
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#2B4C7E]">
                    Mental Wellness
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Kesehatan mental yang lebih baik
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-md flex items-center gap-4">
                <div className="bg-[#DCE7DD] p-4 rounded-2xl">
                  <Users className="text-[#2B4C7E]" size={32} />
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#2B4C7E]">
                    Professional Team
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Tim psikolog terpercaya
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <p className="text-[#2B4C7E] font-semibold mb-4">
            Layanan Kami
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2B4C7E]">
            Pendampingan Profesional
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            DFS menyediakan layanan psikologi profesional untuk membantu
            individu, pasangan, anak, dan keluarga mencapai kesehatan mental
            yang lebih baik.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl transition">

            <div className="bg-[#DCE7DD] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Brain className="text-[#2B4C7E]" size={32} />
            </div>

            <h3 className="text-2xl font-bold text-[#2B4C7E] mb-4">
              Konseling Individu
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Membantu mengatasi stress, anxiety, burnout, trauma,
              dan pengembangan diri secara profesional.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl transition">

            <div className="bg-[#DCE7DD] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <HeartHandshake className="text-[#2B4C7E]" size={32} />
            </div>

            <h3 className="text-2xl font-bold text-[#2B4C7E] mb-4">
              Konseling Keluarga
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Pendampingan hubungan keluarga agar lebih harmonis,
              sehat, dan saling memahami.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl transition">

            <div className="bg-[#DCE7DD] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Users className="text-[#2B4C7E]" size={32} />
            </div>

            <h3 className="text-2xl font-bold text-[#2B4C7E] mb-4">
              Corporate Service
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Program mental wellness perusahaan untuk meningkatkan
              produktivitas dan kesehatan mental karyawan.
            </p>

          </div>

        </div>

      </section>
            {/* Psychologist Team */}
      <section className="bg-white py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-[#2B4C7E] font-semibold mb-4">
              Tim Profesional
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2B4C7E]">
              Tim Psikolog DFS
            </h2>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Didampingi oleh tim psikolog profesional yang berpengalaman
              dalam membantu individu dan keluarga bertumbuh lebih sehat.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-[#F5F1EA] rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition">

              <div className="h-80 bg-gradient-to-br from-[#DCE7DD] to-[#B7C9B9]"></div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-[#2B4C7E]">
                  Dr. Rizka Eka Ananda Putri
                </h3>

                <p className="text-[#2B4C7E] mt-2 font-medium">
                  Psikolog Klinis Dewasa
                </p>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  Berpengalaman menangani anxiety, stress management,
                  trauma healing, dan self growth.
                </p>

                <button type="button" className="mt-6 bg-[#2B4C7E] cursor-pointer text-white px-5 py-3 rounded-full hover:opacity-90 transition">
                  Booking
                </button>

              </div>

            </div>

            {/* Card 2 */}
            <div className="bg-[#F5F1EA] rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition">

              <div className="h-80 bg-gradient-to-br from-[#DCE7DD] to-[#B7C9B9]"></div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-[#2B4C7E]">
                  Melissa Luckyanti
                </h3>

                <p className="text-[#2B4C7E] mt-2 font-medium">
                  Psikolog Anak & Remaja
                </p>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  Fokus pada perkembangan anak, parenting,
                  emotional support, dan terapi remaja.
                </p>

                <button type="button" className="mt-6 bg-[#2B4C7E] cursor-pointer text-white px-5 py-3 rounded-full hover:opacity-90 transition">
                  Booking
                </button>

              </div>

            </div>

            {/* Card 3 */}
            <div className="bg-[#F5F1EA] rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition">

              <div className="h-80 bg-gradient-to-br from-[#DCE7DD] to-[#B7C9B9]"></div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-[#2B4C7E]">
                  Maya Dwiayuningtiyas
                </h3>

                <p className="text-[#2B4C7E] mt-2 font-medium">
                  Family & Marriage Counselor
                </p>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  Membantu pasangan dan keluarga membangun hubungan
                  yang lebih sehat dan harmonis.
                </p>

                <button type="button" className="mt-6 bg-[#2B4C7E] cursor-pointer text-white px-5 py-3 rounded-full hover:opacity-90 transition">
                  Booking
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* Testimonials */}
      <section className="py-24 px-6 bg-[#F5F1EA]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-[#2B4C7E] font-semibold mb-4">
              Testimoni
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2B4C7E]">
              Cerita Perjalanan Mereka
            </h2>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Banyak individu dan keluarga telah menemukan ruang aman
              bersama DFS Psychological Center.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Testi 1 */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm">

              <p className="text-gray-600 leading-relaxed">
                “Saya merasa jauh lebih tenang dan memahami diri sendiri
                setelah menjalani sesi konseling di DFS.”
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-[#2B4C7E]">
                  Amanda
                </h4>

                <p className="text-sm text-gray-500">
                  Client Konseling Individu
                </p>
              </div>

            </div>

            {/* Testi 2 */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm">

              <p className="text-gray-600 leading-relaxed">
                “Pendekatan psikolognya sangat hangat dan membantu keluarga
                kami berkomunikasi lebih baik.”
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-[#2B4C7E]">
                  Richard & Family
                </h4>

                <p className="text-sm text-gray-500">
                  Family Counseling
                </p>
              </div>

            </div>

            {/* Testi 3 */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm">

              <p className="text-gray-600 leading-relaxed">
                “Program corporate wellness dari DFS sangat membantu
                meningkatkan wellbeing karyawan.”
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-[#2B4C7E]">
                  PT Harmoni Indonesia
                </h4>

                <p className="text-sm text-gray-500">
                  Corporate Client
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>
{/* Self Assessment */}
      <section className="bg-white py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#2B4C7E] font-semibold mb-4">
            Self Assessment
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2B4C7E]">
            Stress Level Check
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Jawab beberapa pertanyaan sederhana untuk mengenali
            kondisi emosional Anda saat ini.
          </p>

          {!finished ? (

            <div className="mt-12 bg-[#F5F1EA] rounded-[32px] p-10 text-left">

              <h3 className="text-2xl font-bold text-[#2B4C7E] mb-8">
                Akhir-akhir ini saya merasa mudah lelah secara emosional.
              </h3>

              <div className="grid gap-4">

                <button type="button"
                  onClick={() => handleAnswer(1)}
                  className="bg-white text-gray-700 p-5 rounded-2xl hover:bg-[#DCE7DD] transition"
                >
                  Jarang
                </button>

                <button type="button"
                  onClick={() => handleAnswer(2)}
                  className="bg-white text-gray-700 p-5 rounded-2xl hover:bg-[#DCE7DD] transition"
                >
                  Kadang-kadang
                </button>

                <button type="button"
                  onClick={() => handleAnswer(3)}
                  className="bg-white text-gray-700 p-5 rounded-2xl hover:bg-[#DCE7DD] transition"
                >
                  Sering
                </button>

                <button type="button"
                  onClick={() => handleAnswer(4)}
                  className="bg-white text-gray-700 p-5 rounded-2xl hover:bg-[#DCE7DD] transition"
                >
                  Hampir setiap hari
                </button>

              </div>

            </div>

          ) : (

            <div className="mt-12 bg-[#F5F1EA] rounded-[32px] p-10">

              <h3 className="text-3xl font-bold text-[#2B4C7E]">
                Hasil Assessment
              </h3>

              <p className="mt-6 text-lg text-gray-700">
                {score <= 2 &&
                  "Tingkat stress Anda masih relatif ringan. Tetap jaga keseimbangan hidup dan istirahat yang cukup."}

                {score >= 3 &&
                  "Anda mulai menunjukkan tanda stress emosional yang perlu diperhatikan lebih serius."}
              </p>

              <button type="button" className="mt-8 bg-[#2B4C7E] cursor-pointer text-white px-6 py-4 rounded-full hover:opacity-90 transition">
                Booking Konsultasi
              </button>

            </div>

          )}

        </div>

      </section>
            {/* Booking Section */}
      <section className="py-24 px-6 bg-[#F5F1EA]">

        <div className="max-w-5xl mx-auto bg-white rounded-[40px] p-10 md:p-16 shadow-sm">

          <div className="text-center mb-12">

            <p className="text-[#2B4C7E] font-semibold mb-4">
              Booking Konsultasi
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2B4C7E]">
              Mulai Cerita Anda
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Tim DFS siap menjadi sahabat perjalanan emosional Anda.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Left */}
            <div className="space-y-6">

              <div className="bg-[#F5F1EA] rounded-3xl p-6 flex items-start gap-4">

                <div className="bg-[#DCE7DD] p-4 rounded-2xl">
                  <Calendar className="text-[#2B4C7E]" />
                </div>

                <div>
                  <h3 className="font-bold text-xl text-[#2B4C7E]">
                    Jadwal Fleksibel
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Pilih jadwal konsultasi online maupun offline.
                  </p>
                </div>

              </div>

              <div className="bg-[#F5F1EA] rounded-3xl p-6 flex items-start gap-4">

                <div className="bg-[#DCE7DD] p-4 rounded-2xl">
                  <MessageCircle className="text-[#2B4C7E]" />
                </div>

                <div>
                  <h3 className="font-bold text-xl text-[#2B4C7E]">
                    Respon Cepat
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Tim kami akan segera menghubungi Anda melalui WhatsApp.
                  </p>
                </div>

              </div>

            </div>

            {/* Right Form */}
            <div className="space-y-5">

              <input
                type="text"
                placeholder="Nama Lengkap"
                value={name}
onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#F5F1EA] p-5 rounded-2xl outline-none text-gray-700"
              />

              <select
              value={service}
onChange={(e) => setService(e.target.value)}
                className="w-full bg-[#F5F1EA] p-5 rounded-2xl outline-none text-gray-700"
              >
                <option>Pilih Layanan</option>
                <option>Konseling Individu</option>
                <option>Konseling Keluarga</option>
                <option>Corporate Service</option>
              </select>

              <textarea
                placeholder="Ceritakan kebutuhan Anda..."
                rows={5}
                value={message}
onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#F5F1EA] p-5 rounded-2xl outline-none text-gray-700"
              ></textarea>

              <button type="button"
  onClick={handleWhatsAppBooking}
  className="w-full bg-[#2B4C7E] text-white py-5 rounded-2xl hover:opacity-90 transition"
>
  Booking via WhatsApp
</button>
                            </div>

          </div>

        </div>

      </section>
            {/* Kokologi Section */}
      <section className="bg-white py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-[#2B4C7E] font-semibold mb-4">
            Kokologi Interaktif
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2B4C7E]">
            Pilih Sebuah Pintu
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Bayangkan Anda berada di lorong misterius dan menemukan
            tiga pintu berbeda. Pintu mana yang paling ingin Anda buka?
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {/* Red */}
            <button
              type="button"
              onClick={() => handleKokologi("red")}
              className="h-72 rounded-[32px] bg-red-400 hover:scale-105 transition shadow-xl"
            >
              <span className="text-white text-2xl font-bold">
                Pintu Merah
              </span>
            </button>

            {/* Blue */}
            <button
              type="button"
              onClick={() => handleKokologi("blue")}
              className="h-72 rounded-[32px] bg-blue-400 hover:scale-105 transition shadow-xl"
            >
              <span className="text-white text-2xl font-bold">
                Pintu Biru
              </span>
            </button>

            {/* Green */}
            <button
              type="button"
              onClick={() => handleKokologi("green")}
              className="h-72 rounded-[32px] bg-green-400 hover:scale-105 transition shadow-xl"
            >
              <span className="text-white text-2xl font-bold">
                Pintu Hijau
              </span>
            </button>

          </div>

          {kokologiResult && (

            <div className="mt-16 bg-[#F5F1EA] rounded-[32px] p-10">

              <h3 className="text-3xl font-bold text-[#2B4C7E] mb-6">
                Hasil Kokologi
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                {kokologiResult}
              </p>

            </div>

          )}

        </div>

      </section>
            {/* Articles Section */}
      <section className="py-24 px-6 bg-[#F5F1EA]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-[#2B4C7E] font-semibold mb-4">
              Artikel Psikologi
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2B4C7E]">
              Insight & Edukasi Mental Health
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Temukan berbagai artikel seputar kesehatan mental,
              hubungan keluarga, parenting, dan pengembangan diri.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Article 1 */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition">

              <div className="h-64 bg-gradient-to-br from-[#DCE7DD] to-[#B7C9B9]"></div>

              <div className="p-8">

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">

                  <span>Stress Management</span>
                  <span>12 Mei 2026</span>

                </div>

                <h3 className="text-2xl font-bold text-[#2B4C7E] leading-snug">
                  Cara Mengenali Burnout Sebelum Terlambat
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Kenali tanda-tanda burnout sejak dini agar kesehatan mental
                  tetap terjaga dengan baik.
                </p>

                <button
                  type="button"
                  className="mt-6 flex items-center gap-2 text-[#2B4C7E] font-semibold"
                >
                  Baca Artikel
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition">

              <div className="h-64 bg-gradient-to-br from-[#DCE7DD] to-[#B7C9B9]"></div>

              <div className="p-8">

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">

                  <span>Parenting</span>
                  <span>08 Mei 2026</span>

                </div>

                <h3 className="text-2xl font-bold text-[#2B4C7E] leading-snug">
                  Pentingnya Validasi Emosi pada Anak
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Membantu anak memahami emosinya dapat meningkatkan
                  rasa aman dan kepercayaan diri.
                </p>

                <button
                  type="button"
                  className="mt-6 flex items-center gap-2 text-[#2B4C7E] font-semibold"
                >
                  Baca Artikel
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition">

              <div className="h-64 bg-gradient-to-br from-[#DCE7DD] to-[#B7C9B9]"></div>

              <div className="p-8">

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">

                  <span>Relationship</span>
                  <span>02 Mei 2026</span>

                </div>

                <h3 className="text-2xl font-bold text-[#2B4C7E] leading-snug">
                  Komunikasi Sehat dalam Hubungan Pasangan
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Pelajari cara membangun komunikasi yang lebih sehat
                  dan suportif bersama pasangan.
                </p>

                <button
                  type="button"
                  className="mt-6 flex items-center gap-2 text-[#2B4C7E] font-semibold"
                >
                  Baca Artikel
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* Footer */}
      <footer className="bg-[#2B4C7E] text-white py-16 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

          {/* Logo */}
          <div>

            <h2 className="text-3xl font-bold">
              DFS
            </h2>

            <p className="mt-4 text-white/80 leading-relaxed">
              Sahabat Keluarga Anda dalam perjalanan menuju
              kesehatan mental yang lebih baik.
            </p>

          </div>

          {/* Menu */}
          <div>

            <h3 className="font-bold text-xl mb-4">
              Menu
            </h3>

            <ul className="space-y-3 text-white/80">
              <li>Home</li>
              <li>Tentang</li>
              <li>Layanan</li>
              <li>Psikolog</li>
              <li>Artikel</li>
            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="font-bold text-xl mb-4">
              Layanan
            </h3>

            <ul className="space-y-3 text-white/80">
              <li>Konseling Individu</li>
              <li>Konseling Keluarga</li>
              <li>Corporate Service</li>
              <li>Self Assessment</li>
            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="font-bold text-xl mb-4">
              Kontak
            </h3>

            <ul className="space-y-3 text-white/80">
              <li>Bandung, Indonesia</li>
              <li>hello@dfscenter.id</li>
              <li>+62 812 3456 7890</li>
            </ul>

          </div>

        </div>

        <div className="border-t border-white/20 mt-16 pt-8 text-center text-white/70">
          © 2026 DFS Psychological Center. All rights reserved.
        </div>
      
      </footer>
    </main>
  );
}