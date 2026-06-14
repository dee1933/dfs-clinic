import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: {
    default: "DFS Psychological Center",
    template: "%s | DFS Psychological Center",
  },

  description:
    "Layanan psikologi profesional untuk anak, remaja, dewasa, keluarga, dan perusahaan di Bandung.",

  keywords: [
    "psikolog bandung",
    "klinik psikologi",
    "psikolog anak",
    "psikolog remaja",
    "psikolog dewasa",
    "tes psikologi",
    "konseling keluarga",
    "DFS Psychological Center",
  ],

  openGraph: {
    title: "DFS Psychological Center",
    description:
      "Layanan psikologi profesional untuk anak, remaja, dewasa, keluarga, dan perusahaan.",

    url: "http://localhost:3000",

    siteName: "DFS Psychological Center",

    locale: "id_ID",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "DFS Psychological Center",

    description:
      "Layanan psikologi profesional untuk anak, remaja, dewasa, keluarga, dan perusahaan.",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
