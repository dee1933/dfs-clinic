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
import ArticlesSection from "@/components/ArticlesSection";


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
      
      <ArticlesSection />
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