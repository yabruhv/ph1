"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // FIX: Changed from "/authorize" to "/api/authorize" to match your VS Code folder structure
      const res = await fetch("/api/authorize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 2xl:p-16 gap-6 sm:gap-8 lg:gap-10 font-sans overflow-x-hidden">
      {/* Top Left ? Link */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-10 lg:left-10 2xl:top-14 2xl:left-14 z-10">
        <Link
          href="/about"
          className="flex items-center justify-center rounded-full bg-gradient-to-b from-slate-100 via-slate-300 to-slate-400 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16 text-xs sm:text-sm lg:text-base 2xl:text-xl font-semibold text-black hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-slate-300/50"
        >
          ?
        </Link>
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-4 text-center max-w-5xl px-2">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold bg-gradient-to-b from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)] tracking-wide leading-tight">
          Phase 001 Collection
        </h1>
        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-medium bg-gradient-to-b from-slate-200 via-slate-400 to-slate-500 bg-clip-text text-transparent tracking-widest">
          200 Once-Off
        </p>
      </div>

      {/* Input Bar Form */}
      <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg 2xl:max-w-xl px-2 flex flex-col items-center gap-2">
        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center rounded-full bg-slate-300/20 backdrop-blur-md border border-slate-300/30 p-1 sm:p-1.5 2xl:p-2 focus-within:border-slate-300/60 transition-all"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="welcome to the experiment"
            className="w-full min-w-0 bg-transparent pl-3 sm:pl-5 pr-2 py-1.5 sm:py-2 2xl:py-3 text-xs sm:text-base 2xl:text-lg text-white placeholder-slate-300/70 focus:outline-none text-left"
            required
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-gradient-to-b from-slate-100 via-slate-300 to-slate-400 px-3 sm:px-5 2xl:px-8 py-1.5 sm:py-2 2xl:py-3 text-xs sm:text-sm 2xl:text-lg font-semibold text-black hover:opacity-90 transition-opacity whitespace-nowrap focus:outline-none disabled:opacity-50"
          >
            {status === "loading" ? "..." : "Authorize"}
          </button>
        </form>

        {/* Feedback Messages */}
        {status === "success" && (
          <p className="text-xs sm:text-sm text-emerald-400 font-medium tracking-wide">
            Authorized. You are on the list.
          </p>
        )}
        {status === "error" && (
          <p className="text-xs sm:text-sm text-rose-400 font-medium tracking-wide">
            Something went wrong. Please try again.
          </p>
        )}
      </div>

      {/* Footer Text */}
      <footer className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10 2xl:bottom-14 2xl:left-14 text-[9px] sm:text-xs lg:text-sm 2xl:text-base font-round bg-gradient-to-b from-slate-200 to-slate-500 bg-clip-text text-transparent tracking-wider">
        © 2026 PHASE ONE. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}