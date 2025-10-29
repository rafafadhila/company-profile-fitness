// src/components/VideoHero.tsx
"use client";
import { useEffect, useState } from "react";

export default function VideoHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // hindari SSR-hydration mismatch

  return (
    <video
      src="/videos/hero-video.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  );
}
