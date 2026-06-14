"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin");
  };

  return (
    <main className="min-h-screen bg-[#F5F1EA] flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-[32px] p-10 shadow-sm">

        <h1 className="text-4xl font-bold text-[#2B4C7E] mb-8 text-center">
          Admin Login
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-[#2B4C7E] text-white py-4 rounded-full font-semibold"
          >
            {loading ? "Loading..." : "Login"}
          </button>

        </div>

      </div>

    </main>
  );
}