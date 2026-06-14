"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseAuth } from "@/lib/supabase-auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {

  const checkSession = async () => {

    const {
      data: { session },
    } = await supabaseAuth.auth.getSession();

    if (session) {
      router.push("/admin");
    }

  };

  checkSession();

}, [router]);

  const handleLogin = async () => {
    const { error } =
      await supabaseAuth.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F5F1EA]">
      <div className="bg-white p-10 rounded-3xl shadow-sm w-full max-w-md">

        <h1 className="text-3xl font-bold text-[#2B4C7E] mb-8">
          Login Admin
        </h1>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border rounded-xl p-4"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-[#2B4C7E] text-white p-4 rounded-xl"
          >
            Login
          </button>

        </div>

      </div>
    </main>
  );
}